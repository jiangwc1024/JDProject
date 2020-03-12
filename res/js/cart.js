class Cart {
	constructor() {
	}
	showList() {
		// console.log(this.cartData);
		this.cartList = document.getElementById("cartList");
		// let productData = JSON.parse(localStorage.getItem("productData"));

		let str = "";
		if(getCookie("username")){
			let uid = getCookie("id");
			// console.log(uid);
			$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",
			{
				id:`${uid}`,
			}
			).then((data)=>{
				this.cartData = data.data;
				for (let id in this.cartData) {
					console.log(id);
					str +=
						`
					<li data-id="${this.cartData[id].pid}"><input type="checkbox" class="ck"><img src="${this.cartData[id].pimg}">商品名称:<span style = "color:blue">${this.cartData[id].pdesc}</span>商品数量:<span class="minus">&nbsp;&nbsp;-</span><input style = "color:blue" type="text" value="${this.cartData[id].pnum}" class="num"><span class="plus">+</span>单价是:<span style = "color:blue" class="price">${this.cartData[id].pprice}</span>单个总价是:<span style = "color:blue" class="perTotalPrice">${this.cartData[id].pnum*this.cartData[id].pprice}</span><input type="button" value="删除" class="delBtn"></li>
					`;
				}
				this.cartList.innerHTML = str;
				this.updateData();
				this.getTotalPrice();
				this.removeData();
			})
		}else{
			alert("您未登录，请先登录");
			location.href= "../login.html";
		}
		
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
		console.log(this.ck);
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
			let uid;
			if(getCookie("id")){
				uid = getCookie("id");
			}else{
				alert("您还未登录，请重新登录");
				location.href = "../login.html"
			}
			let num = this.num[i].value;
			$.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
			{
				uid:uid,
				pid:id,
				pnum:num
			}).then((data)=>{
				console.log(data);
			})
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
		console.log(this.delBtn);
		for (let i = 0; i < this.delBtn.length; i++) {
			this.delBtn[i].onclick = () => {
				let uid;
				if(getCookie("id")){
				uid = getCookie("id");
				}else{
				alert("您还未登录，请重新登录");
				location.href = "../login.html"
			}
				this.cartList.removeChild(this.list[i]);

				this.ck[i].checked = false;

				let id = this.list[i].getAttribute("data-id");
				$.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",
				{
					uid:uid,
					pid:id
				}).then(
					()=>{
						location.reload();
					}
				)

				this.getTotalPrice();

			}


		}


	}

}
