# AWS

## How to Install Node App on EC2 Instance

These commands will install a Node.js on an EC2 Instance. They assume you've already launched a new instance.

```
ssh -i "~./personal-account.pem" ec2-user@ec2-54-225-35-41.compute-1.amazonaws.com // SSH into instance
curl -sL https://rpm.nodesource.com/setup_14.x | bash - // Install Node
sudo apt-get install git // Install Git
```

See below for details.

## Connect to EC2 Instance

```
ssh -i "~./personal-account.pem" ec2-user@ec2-54-225-35-41.compute-1.amazonaws.com
```

The `-i` flag allows you to provide an identify file. PEM (Privacy-Enhanced Mail) is a file format for sending cryptographic keys, certificates, etc. Open up a `.pem` file and you'll see something like this:

```
-----BEGIN CERTIFICATE-----
MIICLDCCAdKgAwIBAgIBADAKBggqhkjOPQQDAjB9MQswCQYDVQQGEwJCRTEPMA0G
A1UEChMGR251VExTMSUwIwYDVQQLExxHbnVUTFMgY2VydGlmaWNhdGUgYXV0aG9y
aXR5MQ8wDQYDVQQIEwZMZXV2ZW4xJTAjBgNVBAMTHEdudVRMUyBjZXJ0aWZpY2F0
ZSBhdXRob3JpdHkwHhcNMTEwNTIzMjAzODIxWhcNMTIxMjIyMDc0MTUxWjB9MQsw
CQYDVQQGEwJCRTEPMA0GA1UEChMGR251VExTMSUwIwYDVQQLExxHbnVUTFMgY2Vy
dGlmaWNhdGUgYXV0aG9yaXR5MQ8wDQYDVQQIEwZMZXV2ZW4xJTAjBgNVBAMTHEdu
dVRMUyBjZXJ0aWZpY2F0ZSBhdXRob3JpdHkwWTATBgcqhkjOPQIBBggqhkjOPQMB
BwNCAARS2I0jiuNn14Y2sSALCX3IybqiIJUvxUpj+oNfzngvj/Niyv2394BWnW4X
uQ4RTEiywK87WRcWMGgJB5kX/t2no0MwQTAPBgNVHRMBAf8EBTADAQH/MA8GA1Ud
DwEB/wQFAwMHBgAwHQYDVR0OBBYEFPC0gf6YEr+1KLlkQAPLzB9mTigDMAoGCCqG
SM49BAMCA0gAMEUCIDGuwD1KPyG+hRf88MeyMQcqOFZD0TbVleF+UsAGQ4enAiEA
l4wOuDwKQa+upc8GftXE2C//4mKANBC6It01gUaTIpo=
-----END CERTIFICATE-----
```

The url after `ec2-user@` is the public url for the EC2 instance.

## Install Node

1. Install Node. (See [https://github.com/nodesource/distributions/blob/master/README.md](NodeSource) for the correct distribution.

```
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
```

2. Install Git.

```
sudo apt-get install git
```
