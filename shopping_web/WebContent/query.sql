drop table member;

create table member(member_id varchar2(20) constraint member_id_pk primary key, member_pwd varchar2(20), member_mail varchar2(30), 
member_name varchar2(10), member_phone varchar2(15), member_addr varchar2(50)
);

insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) values
('admin', 'admin1234', 'admin@gmail.com', '관리자', '01012345678', 'ONLY YOU 본점');
insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) values
('wnsdn1269', 'wnsdn9307', 'wnsdn1269@gmail.com', '이준우', '01047861269', '경기도 성남시 중원구 산성대로');

select * from member;

delete from member where member_id = 'wnsdn2930';