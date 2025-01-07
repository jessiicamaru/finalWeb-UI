create table orders(
	TicketID varchar(10),
    UserID varchar(36),
    cus_email varchar(255),
    cus_id varchar(255),
    cus_phone varchar(255),
    cus_name varchar(255),
	FOREIGN KEY ( TicketID) REFERENCES bookedticket (ID),
	FOREIGN KEY (UserID) REFERENCES users (UID)
)