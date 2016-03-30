#!/usr/bin/python

from threading import Thread
import cherrypy
import json
import sys
import urllib
import urllib2
import DBcs



#feeCalc
#Script get the data from the form and the constant cost from the DB
#and calculate the fee for every company.
#returns the best 5 five option for this specific transaction, and the savings for 1000 transactions.

LIMIT0 = 0
LIMIT1 = 10
LIMIT2 = 3000
LIMIT3 = 10000
LIMIT4 = 100000
LIMIT5 = sys.maxint


class specific_charge:

	def __init__(self, comp, card, p, f, inter, q = 0 ):
		self.company_name = comp
		self.card_type = card
		self.per = p
		self.fix = f
		self.international = inter
		self.qualified = q







class fee_calculator:

	def __init__(self):
		self.clearing_comp = [""]

	@cherrypy.expose
	def index(self):
	 	return """<html lang="en">
		<head >
		<title >Card Form</title >
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" >
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<link href="stylesheet.css" rel="stylesheet">
		<link href="main.css" rel="stylesheet" >
		<script src="validation.js"></script>
		</head >

		<body>
		<div class="container main-content col-md-4">


		<form name='registration' onSubmit="return formValidation();">
		<div class="form-group">
		<label>Credit Card Number</label>
		<input class='form-control' name='credit' type="text" ng-model="credit.number" id="number" placeholder="5480 1111 1111 1111">
		</div>

		<div class="form-group">
		<label>Expiration Date</label>
		<input class='form-control' name='credit' type="month" ng-model="credit.expiration" id="date">
		</div>

		<div class="form-group">
		<label>Name</label>
		<input class='form-control' name='credit' type="text" ng-model="credit.name" id="name" placeholder="John Doe">
		</div>


		<input type="submit" class="btn btn-primary" name="submit" value="Submit" />

		</form>

		</div>

		<div class="container price col-md-4">
		<h3>Total Price:</h3>
		<h4>Course Subject:</h4>
		<div class="graph col-md-12" id="ori"></div>
		</div>


		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
		<script src="main.js"></script>

		</body>
		</html>"""

	def get_DB(self):
		db = DBcs.Services.servicesList

	'''
	extract_data:
	this function gets the json extract the details and creat an array off possible charges.
	international = 1 : True.
	international = 0 : False.
	total = object =
	'''




	def extract_data(self, amount, card, total, international, qualified, risk):
		return "ok"
		# companys = DBcs.Services.servicesList
		# for c in companys:
		# 	name = c['serviceName']
		# 	if amount < LIMIT0:
		# 		return -1
		# 	elif amount < LIMIT1:
		# 		rangep = "one"
		# 	elif amount < LIMIT2:
		# 		rangep = "two"
		# 	elif amount < LIMIT3:
		# 		rangep = "three"
		# 	elif amount < LIMIT4:
		# 		rangep = "four"
		# 	perc = c[rangep + "Percent"]
		# 	fixc = c[rangep + "Fix"]
        #
		# nq = ""
		# if not qualified:
		# 	if card == 'visa' or card == 'mastercard':
		# 		nq = "vmNQ"
		# 	else:
		# 		nq = "axp"
		# totals = []
		# for t in total:
		# 	totals.append(t)
        #




		# for c in self.clearing_comp:






	def calc_fee(amount, risk, international, p_fee, c_fee, r_fee):
		if (1-risk) < (r_fee / amount):
			return -1
		fee = amount * p_fee + c_fee
		return fee



if __name__ == '__main__':
	cherrypy.quickstart(fee_calculator(), config="fin_server.conf")
