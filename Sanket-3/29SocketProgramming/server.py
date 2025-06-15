import socket
import time
import threading
print("Starting a new server..")

def connect_a_client(conn, addr):
    print("New client connection established")
    data = conn.recv(2048)
    print("Data from client", data)
    time.sleep(10)
    conn.sendall(b"I have received data from you")
    conn.close()

HOST = "localhost"
PORT = 8082

# 1. created a socket object
server_socket = socket.socket()

# 2. bind to a port
server_socket.bind((HOST, PORT))

# 3. listen for incommming requests
server_socket.listen()

print("Server is listening on ", HOST, PORT)

while True:

    # 4. Accepting new connection
    conn , addr = server_socket.accept()

    t = threading.Thread(target=connect_a_client, args=(conn, addr))

    t.start()
