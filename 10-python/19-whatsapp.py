#Twilio 

from twilio.rest import Client

from_whatsapp_number    = 'whatsapp:+14155238886'
to_whatsapp_number      = 'whatsapp:+573006954218'
account_id              = 'AC940be3b558157eed36844f2093d67cc1'
auth_tokem              = '849a18a9bc4819262ba11e83e57bff86'

client = Client(account_id, auth_tokem)

def sendmessage(msj):
    client.messages.create(body=msj,from_=from_whatsapp_number,to=to_whatsapp_number)

sendmessage('Hola desde Python')
sendmessage('Usando Twilio para Whatsapp')