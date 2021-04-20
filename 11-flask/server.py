import os
from flask import Flask, render_template, redirect, request, session, flash 
from flask_bootstrap import Bootstrap
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
import pymongo

app = Flask(__name__)
app.secret_key = 'llave'
app.config['UPLOAD_FOLDER'] = os.path.dirname(os.path.abspath(__file__))
bootstrap = Bootstrap(app)

# Get Documents
#---------------------------------------------
def showUsers():
    cursor = collection.find()
    for doc in cursor:
        print(doc)

def getUsers():
    cursor = collection.find()
    return cursor 

# Get Users
def getUser(_id):
    _id = ObjectId(_id)
    cursor = collection.find_one({"_id": _id})
    return cursor

#---------------------------------------------
# Connect mongoDB
try:
    mongo = pymongo.MongoClient('mongodb://localhost:27017/')
    database = mongo.adsimongo
    collection = database.users
    #showUsers()
except Exception as e:
    print("Error: Problemas con mongoDB"+ e)
#---------------------------------------------
@app.route('/')
def welcomeView():
    #return "Hola ADSI"
    return render_template('index.html', cursor=getUsers())

@app.route('/users', methods = ['POST'])
def userAdd():
  try:
    _firstname = request.form['firstname']
    _lastname = request.form['lastname']
    _password = request.form['password']

    #Upload File
    target = os.path.join(app.config['UPLOAD_FOLDER'],'static/uploads/')
    if not os.path.isdir(target):
      os.mkdir(target)
    for file in request.files.getlist('photo'):
      filename = file.filename
      destination = "/".join([target,filename])
      file.save(destination)
    _photo = 'static/uploads/'+filename
    _hashed_pass = generate_password_hash(_password) 

    collection.insert_one({'firstname':_firstname,'lastname':_lastname,'photo':_photo, 'password':_hashed_pass})
    flash("Usuario adicionado con exito")
    return redirect("/")
  except Exception as e:
    print(e)

@app.route('/users/add')
def usersAddForm():
  return render_template('users/add.html')



@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")

#---------------------------------------------
if __name__ == "__main__":
    app.run(port=5050, debug=True)