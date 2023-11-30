-- member table

drop table member;

create table member(member_id varchar2(20) constraint member_id_pk primary key, member_pwd varchar2(20), member_mail varchar2(30), 
member_name varchar2(20), member_phone varchar2(15), member_addr varchar2(100)
);

insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) 
values ('admin', 'admin1234', 'admin@gmail.com', '관리자', '01012345678', 'ONLY YOU 본점');
insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) 
values ('wnsdn1234', 'wnsdn5678', 'wnsdn1234@gmail.com', '이준우', '01047861269', '경기도 성남시 중원구');
insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) 
values ('cbdjei1234', 'cbdjei5678', 'cbdjei1234@gmail.com', '이준우', '01047861269', '경기도 성남시 중원구');
insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) 
values ('zmalqp1234', 'zmalqp5678', 'zmalqp1234@gmail.com', '이준우', '01047861269', '경기도 성남시 중원구');
insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) 
values ('pen', 'pineapple', 'apple@gmail.com', 'pen', '01047861269', '경기도 성남시 중원구 산성대로');
insert into member (member_id, member_pwd, member_mail, member_name, member_phone, member_addr)
values ('user1', 'password1', 'user1@email.com', '홍길동', '010-1234-5678', '서울특별시 강남구');
insert into member (member_id, member_pwd, member_mail, member_name, member_phone, member_addr)
values ('user2', 'password2', 'user2@email.com', '김철수', '010-9876-5432', '부산광역시 해운대구');
insert into member (member_id, member_pwd, member_mail, member_name, member_phone, member_addr)
values ('user3', 'password3', 'user3@email.com', '이영희', '010-5555-1234', '대구광역시 중구');
insert into member (member_id, member_pwd, member_mail, member_name, member_phone, member_addr)
values ('user4', 'password4', 'user4@email.com', '박민수', '010-7777-9999', '인천광역시 남동구');
insert into member (member_id, member_pwd, member_mail, member_name, member_phone, member_addr)
values ('user5', 'password5', 'user5@email.com', '최지연', '010-3333-6666', '대전광역시 서구');

select * from member;

delete from member where member_id = '';

-- items table