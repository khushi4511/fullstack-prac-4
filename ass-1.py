import hashlib
message = "hello how are you ?"
hash_object = hashlib.sha256(message.encode())
hash_value = hash_object.hexdigest()
print (" message", message)
print ("sha256 : hash ", hash_value ) 