Internet of Things Security

Lecture 1: Introduction to IoT

Instructor: Mehmoona Jabeen
Email: Mehmoona.jabeen@mail.au.edu.pk
Department: Cyber Security, Air University


---

Course Outlines

Introduction to Internet of Things

Hardware architectures and embedded systems

Embedded Operating systems for IoT devices

Firmware development and management

Communication Protocols for IoT

IoT Attack vectors and Threat Modelling

IoT security analysis and vulnerability assessment

IoT Application security and their challenges

IoT Data security and challenges

Security issues in Edge Computing based IoT architecture



---

Readings

Selected research articles with each lecture

Selected chapters from referenced books



---

Class Information

Subject: Internet of Things Security

CGR Code: 5s5sx3n



---

Lecture Outlines

What is IoT?

Enabling technologies

Characteristics

Growth and Challenges

IoT Security needs

IoT Attack surfaces and vulnerabilities

Common Vulnerabilities Reported

Known Attacks in IoT



---

What is Internet?

A global network of computers providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.
World Wide Web is only one of many Internet services.


---

Internet of Things

Definition: The IoT is the inter-networking of physical devices, vehicles ("connected devices" or "smart devices"), buildings, and other items embedded with electronics, software, sensors, actuators, and network connectivity to collect and exchange data.

Building Blocks:

1. Identifiable (Recognizing Things)


2. Processing (Think and Decide)


3. Communicating (Talk to Other Devices)


4. Interacting (Take Action Based on Data)



Related Terminologies:

Machine-to-Machine (M2M)

Cyber Physical System (CPS)

Internet of Everything (IoE)



---

IoT Growth Path

Pre-Internet: Human-to-Human (SMS, Fax)

Internet of Contents: Web, Email

Internet of Services: Web 2.0

Internet of People: Social Media

Internet of Things: M2M, Smart Cities, Smart Home



---

Enabling Technologies

RFID: Identification and tracking

WSN: Sensing and monitoring

IPv6: Addressing and networking

WPAN: Low power communication



---

Pervasive Sensing/Computing

Anytime, Anything, Anyscale, Anyplace

Sensors in healthcare, drones, metros, soil, underwater, etc.



---

IoT Evolution

IoT already exists in Cars, Homes, Industrial Machines

Automates systems, collects data, enhances communication



---

First IoT Device

1982 Coke Machine by Carnegie Mellon University

Displayed real-time inventory status remotely



---

Why Now?

1. Fast, low-cost silicon devices


2. Networking progress


3. IPv6 rollout


4. Low-power wireless communication


5. Big Data tools (Hadoop, Spark, Storm)


6. Sensor advancements




---

Convergence of Technologies

Cloud Computing

Data Analytics

Miniaturized Sensors

Ubiquitous Connectivity

IP-based Networking



---

Technologies: Sensors

Types: Motion, Accelerometer, Gyroscope, Barometer, etc.

Factors: Size, Cost, Accuracy, Integration, Energy-efficient protocols



---

Technologies: Networking

Why IP?

Proven technologies

IPv6 support (6LowPAN)

Larger address space

Elimination of NAT




---

Cloud Storage/Analytics Platforms

AWS IoT

Microsoft Azure

Google Cloud

IBM Watson IoT

ThingSpeak, Carriots, ThingWorx



---

IoT Security

Goal: Prevent cyber/physical interaction threats

Requires identifying vulnerabilities, detection, mitigation



---

IoT Attack Surfaces

Cyber: Networks, databases

Physical: Hardware ports, cables

Environmental: GPS, electromagnetic interference

Human: Phishing, bribery



---

OWASP Vulnerabilities (Examples)

Ecosystem: Implicit trust

Device Memory: Cleartext credentials

Physical Interfaces: CLI, firmware extraction

Web Interface: SQL Injection, Weak Passwords

Firmware: Hardcoded credentials, unsigned updates

Network Services: DoS, unencrypted traffic

Local Storage: Unencrypted or weak encryption



---

Vulnerability Reports (Examples)

CVE-2018-6932: DoS via IP fragment reassembly

CVE-2018-3619: Info disclosure via Intel Optane

CVE-2018-9149: UART security failure

CVE-2018-9232: Malicious firmware updates

CVE-2018-9919: Factory backdoor in routers

CVE-2019-8950: Admin login via Telnet



---

Exploiting Vulnerabilities

ThingBot: IoT botnets

Proofpoint: 750,000+ SPAM emails from ThingBots

Linux.Darlloz: PHP vulnerability

Spike Botnet: DDoS via IoT

Hacked Wearables and Smart Meters



---

Major Attacks

Mirai Botnet: DDoS on Dyn, took down major sites

Cold in Finland: Heating systems attacked

Brickerbot: Permanent Denial-of-Service

Botnet Barrage: 5000+ devices flooding DNS



---

Securing IoT

Need for standardization

IPv6 and DNS critical

Prevent DDoS, cache poisoning



---

Existing Internet Security in IoT

Mutual authentication

PKI solutions

TLS, IPSec integration challenges

Context-aware IDS



---

Challenges in IoT Security

Perception Layer: Eavesdropping, spoofing

Network Layer: DoS, MITM

Middleware Layer: Unauthorized access

Application Layer: Code injection, phishing, sniffing



---

ARM Platform Security Architecture (PSA)

End-to-end IoT security

Simplifies device security evaluation



---

Traditional Security vs IoT

Not directly applicable due to resource constraints

Need new tools and datasets



---

Tool 1: IoT Traffic Generator

Open-source

Real-time use cases

Latest attack simulation

GitHub Link



---

Tool 2: IoT Firewall

IoT devices can’t run host-level security

Firewall must be external/resource-aware
