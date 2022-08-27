fetch(
  "https://ipgeolocation.abstractapi.com/v1/?api_key=3fa01e18a4584d8893b567baff47fcdb"
)
  .then((response) => response.json())
  .then((data) => displayData(data));

function displayData(data) {
  const ip = document.getElementById("your-ip");
  ip.innerHTML = `
  Your IP: <b>${data.ip_address}</b>
  `;
  const country = document.getElementById("country");
  country.innerHTML = `
  Country: <img src="${data.flag.png}" "width="20" height="20" alt=""> <b>${data.country}</b>
  `;
  const timezone = document.getElementById("timezone");
  timezone.innerHTML = `
  Time Zone: <b>${data.timezone.name}, ${data.timezone.abbreviation}</b>
  `;
  const currency = document.getElementById("currency");
  currency.innerHTML = `
  Currency: <b>${data.currency.currency_code}, ${data.currency.currency_name}</b>
  `;
  const connection = document.getElementById("connection");
  connection.innerHTML = `
  Connection: <b>${data.connection.connection_type}, ${data.connection.isp_name}</b>
  `;
  const isvpn = document.getElementById("isvpn");
  isvpn.innerHTML = `
  Is VPN: <b>${data.security.is_vpn}</b>
  
  `;
}
