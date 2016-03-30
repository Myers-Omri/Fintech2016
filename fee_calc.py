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

	def __init__(self, comp, card, p,f,inter, q = 0 ):
		self.company_name = comp
		self.card_type = card
		self.per = p
		self.fix = f
		self.international = inter
		self.qualified = q







class fee_calculator:

	def __init__(self):
		self.clearing_comp = [""]

	def index(self):
		#here comes the html code.

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


		nq = ""
		if not qualified:
			if card == 'visa' or card == 'mastercard':
				nq = "vmNQ"
			else:
				nq = "axp"
		totals = []
		for t in total:
			totals.append(t)


		if amount < LIMIT0:
			return -1
		elif amount < LIMIT1:
			range = "one"
		elif amount < LIMIT2:
			range = "two"
		elif amount < LIMIT3:
			range = "three"
		elif amount < LIMIT4:
			range = "four"


		for c in self.clearing_comp:






	def calc_fee(amount, risk, international, p_fee, c_fee, r_fee):
		if (1-risk) < (r_fee / amount):
			return -1
		fee = amount * p_fee + c_fee
		return fee



if __name__ == '__main__':
	cherrypy.quickstart(fee_calculator(), config="fin_server.conf")
