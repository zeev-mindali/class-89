#Inherit current image from mysql image
FROM mysql:5.7

#copy northwind SQL to start up file to inject SQL commands
COPY ./northwind.sql /docker-entrypoint-initdb.d


