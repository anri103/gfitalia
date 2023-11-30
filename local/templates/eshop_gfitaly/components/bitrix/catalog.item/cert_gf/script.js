const Cform = document.forms.certForm

Cform.addEventListener('submit', async function(e) {
	e.preventDefault()

	const resDiv = document.getElementById("resp-result")

	let consent = Cform.querySelector('input[type="checkbox"]')
	let htmlErr = ''

	if (!consent.checked) {
		resDiv.innerHTML = '<p class="error">Нужно принять условие соглашения!</p>'
	} else {
		resDiv.innerHTML = ''

		let certPrice = document.querySelector('input[name="certPrice"]').value

		const formData  = new FormData(this);

		formData.append('certPrice', certPrice);

		const url = '/local/templates/eshop_gfitaly/components/bitrix/catalog.item/cert_gf/card/ajax.php'
		const response = await fetch(url, {
			method: 'POST',
			body: formData
		});

		if (response.ok) { 

			let json = await response.json();
		
			if (json.errors) {
				console.log(json.errors)
				if (json.errors.usererr) {
					htmlErr += 	`${json.errors.usererr}<br><span>Пожалуйста авторизуйтесь под своим логином и паролем</span>`
					htmlErr += 	`<br><a href="/personal/orders/">Войти</a>`
				} else {				
					for (i in json.errors) {
						htmlErr += 	`${json.errors[i]}<br>`
					} 
				}    
				
				resDiv.insertAdjacentHTML('beforeEnd', `<p class="error">${htmlErr}</p>`)
			} else {
				resDiv.innerHTML = json.success
			}

			if (json.success) {
				Cform.remove()
				resDiv.innerHTML = 
				`<h3>Покупка сертификата успешно оформлена!</h3>
				<p>Для получения кода сертификата, Вам необходимо оплатить стоимость сертификата</p>
				Оплатить сертификат можно перейдя по <a href="${json.redirect}">ссылке</a>`
			}

			// if (json.redirect) {
			// 	setTimeout(function() { location = json.redirect }, 2000)
			// }
		
		} else {
			alert("Ошибка HTTP: " + response.status);
		}
	}
})