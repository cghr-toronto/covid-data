# CGHR's COVID-19 data 

-   [Introduction](#introduction)
-	[How to use this repository](#how-to-use-this-repository)
-   [COVID-19 data in this repository](#covid-19-data-in-this-repository)
	-	[How to use the data with R](#how-to-use-the-data-with-r)
	-   [Data dictionary](#data-dictionary)
-   [Terms of use](#terms-of-use)

## Introduction
This repository has Coronavirus (Covid-19) data related to CGHR's COVID-19 initiative.  All data posted here are free for the public to use.

There several sources of COVID-19 data on the web. Here we list some sources we have identified so far.
<br>

<b>Data sources on the web:</b><br>
* [John Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19 )
* [Coronavirus App](https://coronavirus.app/map )
* [INED](https://dc-covid.site.ined.fr/en/data/ )
* [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide)
* [Italian data](https://github.com/pcm-dpc/COVID-19)
* [French data](https://github.com/opencovid19-fr)
* [Canadian data](https://github.com/ishaberry/Covid19Canada)
* [USA](https://github.com/nytimes/covid-19-data)
* [Belgium](https://epistat.wiv-isp.be/home/)
* [Our World in Data](https://github.com/owid/covid-19-data/tree/master/public/data)
* [Worldometers](https://www.worldometers.info/coronavirus/)

In our [COVID-19 forecasting paper](https://medrxiv.org/cgi/content/short/2020.04.17.20069161v1) we mostly used data from Coronavirus App. 

## How to use this repository

The data found in this repository can be downloaded by clicking on the file name above and then right clicking on the "Raw" menu button and choosing "Save Link As". Alternatively, you can clone this repository in your computer by using [Git](https://help.github.com/en/github/getting-started-with-github/quickstart).

Additionally, CGHR and non-CGHR researchers can access the data above and other data sets through our COVID-19 database (db).  Our db was created using [PostgreSQL](https://www.postgresql.org/), an open-source db software.  You can connect to it using most statistics programs (R, Stata, Excel, etc.).

Please contact us to request a login or a SQL dump file.

**Note**: The data are updated twice a week.

* See [dictionary.csv](dictionary.csv) for an overview of current data sets shared in this repository

### How to use the data with R
R is an open-source statistical and computational program. You can download it here [R-project](https://www.r-project.org/).

* Sample code to grab data from CGHR's public COVID-19 db


		#Install libraries
		install.packages("DBI")
				
		# Load library
		library(DBI)
	    
		# create connection to db
        con <- DBI::dbConnect(drv = RPostgres::Postgres(), user='?', password='?', host='IP', port='?', dbname='covid_19')

		# get table from db
		res <- dbSendQuery(con, "SELECT * FROM jh_ts_covid19_deaths_global")
		cv19 <- dbFetch(res)
		
		# See data table dimensions
		dim(cv19)

		# See first and last 6 rows
		head(cv19)
		tail(cv19)
		
		# write table as CSV file
		write.table(cv19, "/path/cv19.txt", sep=",", row.names=FALSE)
	
		# remove res object
		dbClearResult(res)

		# disconnect from db
		dbDisconnect(con)

## Terms of use

The content presented here is free for the public to use.

**Contact**: cghr@smh.ca, [CGHR.org](http://www.cghr.org/)
