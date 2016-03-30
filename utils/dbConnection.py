# import MySQLdb
#import PyMySQL
import _mysql_connector


class DbConnection:


    conn = _mysql_connector.MySQL()
    conn.connect(user='root', password='ilovEdatA99',
                 host='localhost', database='ourcityg_epay')

    sql = 'SELECT * FROM service'
    conn.query(sql)

    row = conn.fetch_row()
    print(row)
    conn.consume_result()



    conn.close()


    # #conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='', db='mysql')
    # conn = PyMySQL.connect(host='162.144.26.104', port=3306,user='ourcityg_dor', passwd='dorringel',db='ourcityg_epay')
    #
    #
    # cur = conn.cursor()
    #
    # cur.execute("SELECT * FROM services")
    #
    # print(cur.description)
    #
    # print()
    #
    # for row in cur:
    #     print(row)
    #
    # cur.close()
    # conn.close()



    #
    # db = _mysql_connector.MySQL.connect()
    # # Open database connection
    # # db = MySQLdb.connect("localhost","ourcityg_dor","dorringel","ourcityg_epay" )
    # db = MySQLdb.connect("162.144.26.104,3306","ourcityg_dor","dorringel","ourcityg_epay")
    # prepare a cursor object using cursor() method
    # cursor = db.cursor()
    #
    # # execute SQL query using execute() method.
    # cursor.execute("select * from services")
    #
    # # Fetch a single row using fetchone() method.
    # data = cursor.fetchone()
    #
    # print "Database version : %s " % data
    #
    # # disconnect from server
    # db.close()




# if __name__ == "__main__":
#     main()