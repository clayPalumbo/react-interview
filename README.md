# Overview

This app contains 3 datasets set up to be returned on 3 separate API calls to the express.js server. Below is a basic description of each dataset along with the API call necessary to receive the data. You have 48 hours to use these datasets to show of your UI skills with
a few key requirements.

1. Use Google Maps API, Mapbox GL, or any other map API to display all of the Lowe's stores as markers.  <br />
2. Show at least 1 dataset in table form. React-table is a favorite of our but any React component in table form is fine. <br />
3. Create some form of multi page appearance through a navbar or sidebar to separate the 3 sets of figures. <br />

Outside of these requirements you have free reign to let your creativity shine. Display the data in any way that makes sense, format the pages however you see fit. Keep in mind that we regularly build Web Apps for business partners so use that to guide our choices. Also note that these datasets are NOT connected to don't try to build connections between the three. If you have any technical difficulties with the testing app feel free to reach out through email. 


# Lowes Stores Data

### Fetch API
http://localhost:12059/react-interview/getLowesStores

### Example Data
[ { name: 'LOWE\'S OF DELRAN, NJ',<br />
    number: 1670,<br />
    geometry: { location: [Object] } },<br />
  { name: 'LOWE\'S OF SPRING HILL, FL',<br />
    number: 1605,<br />
    geometry: { location: [Object] } },<br />
  { name: 'LOWE\'S OF BROWNSVILLE, TX',<br />
    number: 2669,<br />
    geometry: { location: [Object] } },<br />
  { name: 'LOWE\'S OF CHALMETTE, LA',<br />
    number: 3016,<br /><br />
    geometry: { location: [Object] } },<br />
  { name: 'LOWE\'S OF BINGHAMTON, NY',<br />
    number: 1502,<br />
    geometry: { location: [Object] } },<br />
  { name: 'LOWE\'S OF HOLMDEL, NJ',<br />
    number: 1035,<br />
    geometry: { location: [Object] } }<br />
]

### Key Definitions
name      name of Lowe's location<br />
number    id number of location<br />
geometry  location:<br />
          lat: latitude of store location<br />
          lng: longitude of store location<br />



# Loan Data

### Fetch API
http://localhost:12059/react-interview/getLoanData

Kaggle Dataset
https://www.kaggle.com/zhijinzhai/loandata/downloads/loan-data.zip/1

### Example Data
Loan_ID,loan_status,Principal,terms,effective_date,due_date,paid_off_time,past_due_days,age,education,Gender<br />
xqd20166231,PAIDOFF,1000,30,9/8/2016,10/7/2016,9/14/2016 19:31,,45,High School or Below,male<br />
xqd20168902,PAIDOFF,1000,30,9/8/2016,10/7/2016,10/7/2016 9:00,,50,Bechalor,female<br />
xqd20160003,PAIDOFF,1000,30,9/8/2016,10/7/2016,9/25/2016 16:58,,33,Bechalor,female<br />
xqd20160004,PAIDOFF,1000,15,9/8/2016,9/22/2016,9/22/2016 20:00,,27,college,male<br />
xqd20160005,PAIDOFF,1000,30,9/9/2016,10/8/2016,9/23/2016 21:36,,28,college,female<br />
xqd20160706,PAIDOFF,300,7,9/9/2016,9/15/2016,9/9/2016 13:45,,35,Master or Above,male<br />
xqd20160007,PAIDOFF,1000,30,9/9/2016,10/8/2016,10/7/2016 23:07,,29,college,male<br />
xqd20160008,PAIDOFF,1000,30,9/9/2016,10/8/2016,10/5/2016 20:33,,36,college,male<br />
xqd20160909,PAIDOFF,1000,30,9/9/2016,10/8/2016,10/8/2016 16:00,,28,college,male<br />
xqd20160010,PAIDOFF,800,15,9/10/2016,9/24/2016,9/24/2016 13:00,,26,college,male<br />
xqd20160011,PAIDOFF,300,7,9/10/2016,9/16/2016,9/11/2016 19:11,,29,college,male<br />
xqd20160012,PAIDOFF,1000,15,9/10/2016,10/9/2016,10/9/2016 16:00,,39,High School or Below,male<br />
xqd20160013,PAIDOFF,1000,30,9/10/2016,10/9/2016,10/7/2016 23:32,,26,college,male<br />
xqd20160014,PAIDOFF,900,7,9/10/2016,9/16/2016,9/13/2016 21:57,,26,college,female<br />
xqd20160015,PAIDOFF,1000,7,9/10/2016,9/16/2016,9/15/2016 14:27,,27,High School or Below,male<br />
xqd20160016,PAIDOFF,800,15,9/10/2016,9/24/2016,9/24/2016 16:00,,26,college,male<br />
xqd20160017,PAIDOFF,1000,30,9/10/2016,10/9/2016,9/27/2016 14:21,,40,High School or Below,male<br />
xqd20160018,PAIDOFF,1000,15,9/10/2016,9/24/2016,9/23/2016 18:49,,32,High School or Below,male<br />
xqd20160019,PAIDOFF,1000,30,9/10/2016,10/9/2016,10/5/2016 22:05,,32,High School or Below,male<br />

### Column Definitions
Loan_ID<br />
loan_status<br />
Principal<br />
terms<br />
effective_date<br />
due_date<br />
paid_off_time<br />
past_due_days<br />
age<br />
education<br />
Gender<br />



# Earth Quake Data

### Fetch API
http://localhost:12059/react-interview/getEarthQuakes

Kaggle Dataset
https://www.kaggle.com/caganseval/earthquake/downloads/earthquake.zip/4

### Example Data
id,date,time,lat,long,country,city,area,direction,dist,depth,xm,md,richter,mw,ms,mb<br /><br />
2.00E+13,2003.05.20,12:17:44 AM,39.04,40.38,turkey,bingol,baliklicay,west,0.1,10,4.1,4.1,0,,0,0<br />
2.01E+13,2007.08.01,12:03:08 AM,40.79,30.09,turkey,kocaeli,bayraktar_izmit,west,0.1,5.2,4,3.8,4,,0,0<br />
1.98E+13,1978.05.07,12:41:37 AM,38.58,27.61,turkey,manisa,hamzabeyli,south_west,0.1,0,3.7,0,0,,0,3.7<br />
2.00E+13,1997.03.22,12:31:45 AM,39.47,36.44,turkey,sivas,kahvepinar_sarkisla,south_west,0.1,10,3.5,3.5,0,,0,0<br />
2.00E+13,2000.04.02,12:57:38 AM,40.8,30.24,turkey,sakarya,meseli_serdivan,south_west,0.1,7,4.3,4.3,0,,0,0<br />
2.01E+13,2005.01.21,12:04:03 AM,37.11,27.75,turkey,mugla,demirciler_milas,south_west,0.1,32.8,3.5,3.5,0,,0,0<br />
2.01E+13,2012.06.24,12:07:22 AM,38.75,43.61,turkey,van,ilikaynak,south_west,0.1,9.4,4.5,0,4.5,,0,0<br />
1.99E+13,1987.12.31,12:49:54 AM,39.43,27.98,turkey,balikesir,dikkonak_bigadic,south_east,0.1,26,3.8,3.8,0,,0,0<br />
2.00E+13,2000.02.07,12:11:45 AM,40.05,34.07,turkey,kirikkale,kocabas_delice,south_east,0.1,1,3.8,3.8,0,,0,0<br />
2.01E+13,2011.10.28,12:47:56 AM,38.76,43.54,turkey,van,degirmenozu,south_east,0.1,3.1,4.3,0,4.2,,0,4.3<br />
2.01E+13,2013.05.01,12:47:56 AM,37.31,37.11,turkey,kahramanmaras,ordekdede_pazarcik,south_east,0.1,9.5,3.5,0,3.5,,0,0<br />

### Column Definitions
id        id of earthquake<br />
date      date of earthquake<br />
time      time of earthquake<br />
lat       latitude of earthquake<br />
long      longitude of earthquake<br />
country   country of earthquake<br />
city      city of earthquake<br />
area      area of earthquake<br />
direction direction of earthquake<br />
dist      distance of direction in km<br />
depth     depth of earthquake<br />
xm        xm of earthquake<br />
md        md of earthquake<br />
richter   Intensity of earthquake (Richter)<br />
mw        mw of earthquake<br />
ms        ms of earthquake<br />
mb        mb of earthquake<br />
