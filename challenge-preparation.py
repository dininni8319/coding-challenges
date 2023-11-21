# 10. Duplicate letter checker
# Create a function in Python that accepts one parameter:
# a string that’s a sentence. 
# This function should return True if any word in that sentence contains duplicate letters
# and False if not.

# def checkDuplicateLetters(str):
#     str.lower()
#     for word in str.split():
#         for letter in word:
#             if word.count(letter) > 1:
#                 return True

#     return False

# print(checkDuplicateLetters("Hello World"))

# 3. Find the domain name using an IP address
# For this Python challenge, you’ll want to import the Python socket library. 
# That’s the only hint. Write a function that accepts an IP address, makes a DNS request,
# and returns the domain name that maps to that IP address using PTR DNS records.
# import socket

# def findDomainName(ip):
#   try:
#       dns, _ , _ , = socket.gethostbyaddr(ip)
#       return dns
#   except socket.error as e:
#       return e

# # Example: Performing a reverse DNS lookup for the IP address "8.8.8.8"
# # ip_address = "142.251.32.46"
# ip_address = "google.com"
# domain_name = findDomainName(ip_address)

# if domain_name:
#     print(f"The domain name associated with {ip_address} is: {domain_name}")
# else:
#     print(f"Failed to retrieve the domain name for {ip_address}")
# print(findDomainName('142.251.32.46'))
# import socket

# def findDomainName(ip_or_domain):
#     try:
#         dns = socket.gethostbyaddr(ip_or_domain)
#         name = socket.getfqdn(ip_or_domain) #get the full name from a name
#         return [dns[0], name]
    
#     except socket.herror as e:
#         return e

# Example: Performing a reverse DNS lookup for the IP address "8.8.8.8"
# ip_address = "142.251.32.46"
# ip_or_domain = "google.com"
# ip_or_domain = "facebook.com"
# ip_or_domain = "facebook.com"
# domain_name = findDomainName(ip_or_domain)
# print('DNS is:',domain_name[1])

# if not isinstance(domain_name[0], str): # it is an array and to access the first param use []
#     print(f"Error: {domain_name[0]}")
# else:
#     print(f"The domain name associated with {ip_or_domain} is: {domain_name[0]}")

# send emails with python
import smtplib

def credentials(): 
    server = 'sandbox.smtp.mailtrap.io'
    port = 2525
    username = ''
    passoword = ''
    return server, port, username, passoword

def sendEmail():
    server, port, username, password = credentials()
    from_email = 'youremail@gmail.com'
    to_email = 'recipient@example.com'
    subject = 'Hello, world!'
    body = 'this is an email for testing'

    message = f"Subject: {subject}\n\n {body}"

    with smtplib.SMTP(server,port) as smtp:
        smtp.starttls()
        smtp.login(username,password)
        smtp.sendmail(from_email, to_email, message)

sendEmail()