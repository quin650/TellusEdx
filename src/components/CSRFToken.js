import React, { useState, useEffect } from "react";
import axios from "axios";

const CSRFToken = () => {
	const [csrftoken, setCsrfToken] = useState("");

	const getCookie = (name) => {
		let cookieValue = "";
		if (document.cookie && document.cookie !== "") {
			let cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				let cookie = cookies[i].trim();
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				axios.get("http://127.0.0.1:8000/accounts/csrf_cookie");
			} catch (err) {
				console.log("error grabbing csrf cookie");
			}
		};

		fetchData();
		setCsrfToken(getCookie("csrftoken"));
	}, []);

	return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CSRFToken;
