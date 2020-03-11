class Cart {
	constructor() {
		if (localStorage.getItem("cartData")) {
			this.cartData = JSON.parse(localStorage.getItem("cartData"));
		} else {
			this.cartData = {};
		}
	}
	saveData(id, num, termi) {
		if (this.cartData[id] === undefined || termi) {
			this.cartData[id] = num;
		} else {
			this.cartData[id] += num;
		}

		localStorage.setItem("cartData", JSON.stringify(this.cartData));
	}
	showList() {
		this.cartList = document.getElementById("cartList");
		let productData = JSON.parse(localStorage.getItem("productData"));

		let str = "";
		for (let id in this.cartData) {
			str +=
				`
	        <li data-id="${id}"><input type="checkbox" class="ck"><img src="${productData[id].imgsrc}">商品名称:<span style = "color:blue">${productData[id].title}</span>商品数量:<span class="minus">&nbsp;&nbsp;-</span><input style = "color:blue" type="text" value="${this.cartData[id]}" class="num"><span class="plus">+</span>单价是:<span style = "color:blue" class="price">${productData[id].price}</span>单个总价是:<span style = "color:blue" class="perTotalPrice">${this.cartData[id]*productData[id].price}</span><input type="button" value="删除" class="delBtn"></li>
	        `;
		}

		this.cartList.innerHTML = str;

	}


	updateData() {
		this.checkAll = document.getElementById("checkAll");
		this.totalPrice = document.getElementById("totalPrice");
		this.list = this.cartList.querySelectorAll("li");
		this.ck = this.cartList.querySelectorAll(".ck");
		this.minus = this.cartList.querySelectorAll(".minus");
		this.plus = this.cartList.querySelectorAll(".plus");
		this.num = this.cartList.querySelectorAll(".num");
		this.price = this.cartList.querySelectorAll(".price");
		this.perTotalPrice = this.cartList.querySelectorAll(".perTotalPrice");
		for (let i = 0; i < this.minus.length; i++) {
			this.minus[i].onclick = () => {
				this.num[i].value--;
				if (this.num[i].value <= 1) {
					this.num[i].value = 1;
				}
				update(i);
				this.getTotalPrice();
			}

			this.plus[i].onclick = () => {
				this.num[i].value++;
				update(i);
				this.getTotalPrice();
			}

			this.num[i].oninput = () => {

				if (this.num[i].value <= 1) {
					this.num[i].value = 1;
				}
				update(i);
				this.getTotalPrice();

			}
			this.ck[i].onclick = () => {

				let count = 0;
				for (let j = 0; j < this.ck.length; j++) {
					if (this.ck[j].checked) {
						count++;
					}
				}
				if (count == this.ck.length) {
					this.checkAll.checked = true;
				} else {
					this.checkAll.checked = false;
				}

				this.getTotalPrice();
			}
		}

		let update = (i) => {
			this.perTotalPrice[i].innerText = this.num[i].value * this.price[i].innerText;
			let id = this.list[i].getAttribute("data-id");
			let num = this.num[i].value;
			this.saveData(id, num, true);
		}

		this.checkAll.onclick = () => {
			for (let i = 0; i < this.ck.length; i++) {
				this.ck[i].checked = this.checkAll.checked;
			}
			this.getTotalPrice();
		}


	}

	getTotalPrice() {
		let total = 0;
		for (let i = 0; i < this.ck.length; i++) {
			if (this.ck[i].checked) {
				total += Number(this.perTotalPrice[i].innerText);
			}
		}
		console.log(total);
		this.totalPrice.innerText = "总价是:" + total;

	}
	removeData() {

		this.delBtn = this.cartList.querySelectorAll(".delBtn");
		for (let i = 0; i < this.delBtn.length; i++) {
			this.delBtn[i].onclick = () => {
				this.cartList.removeChild(this.list[i]);

				this.ck[i].checked = false;

				let id = this.list[i].getAttribute("data-id");


				delete this.cartData[id];

				localStorage.setItem("cartData", JSON.stringify(this.cartData));

				this.getTotalPrice();

			}


		}


	}

}
