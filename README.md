# Socket-I-O

day 1 :- learnt how to create an instance of the Socet IO in the backend

day 2 :- learnt about the event handling from server to client and client to server .

        case 1) . Custom Event create on server side and catch on client side .
        case 2) . Custom Event create on client side and catch on server side .

day 3 :- learnt about broadcasting
broadcasting :- deliver message to all the connnected users

day 4 :- Namespaces in Socket.IO

        Default namespaces('/') are joined by clients when a namespace is not specified while connecting to the server. All connections to the server using the socket-object on the client side are made to the default namespace 1 .

        Custom namespaces ('/custom-namespace') can be created by calling the 'of' function on the server side, allowing you to create unique communication channels. To connect a client to a custom namespace, you need to provide the namespace as an argument to the io constructor call to create a connection and a socket object on the client side

day 5 :- Rooms
mulitple channels that are created using namespaces .
