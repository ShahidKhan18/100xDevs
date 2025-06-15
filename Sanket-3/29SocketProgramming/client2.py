import socket

print("Starting a new server for client 2..")

HOST = "localhost"
PORT = 8082

# 1. created a client object
client_socket = socket.socket()

client_socket.connect((HOST, PORT))

client_socket.sendall(b"Hello server this is client 2")

responsefromserver = client_socket.recv(2048)

print(responsefromserver)
