


## platform USP:
* could work without internet
* every side could decide whom to trust
* inexpensive to start
* integration to any platform possible


## Interface.
Phone detect building (wifi, BT, QR). Phone request connection details from host identity provider.
Phone connect to provider and get data from building, it also send id to building.
Building try to verify identity from trusted guest identity provider.
If unknown guest - send general info.
If known guest - send personalized data (meetings, news, etc)



### host information (identity or QR):
- id
- name
- wifi network
- wifi password
- welcome host url

### guest information
- id
- identity provider (url)
- name

### Welcome screen is list of cards.
Card have:
- name
- content (simple html without js)
- url

Separate view, is just page served from server?



QR example (coresponding QR also available as image in same folder):
 
{"id":"lkdsfifds3242342", "identityUrl":"https://kjsjds.jsajds.tech/api/identity", "name":"Wanha Satama", "wlanName":"freewlan", "wlanPass":"", "welcomeUrl":"https://intranet:8080/welcome"}

QR could be used to provide connection information to clients that don't have internet (e.g. travellers, or in development countries).


