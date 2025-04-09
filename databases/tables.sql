-- battlepacks
create table source (
	source_id int,
	title varchar(50),
	short_title varchar(10),
	primary key(source_id)
);
create table battle_pack (
	set_id varchar(10),
	set_name varchar(50) not null,
	release_year year not null,
	source_id int not null,
	piece_count int,
	msrp decimal(10,2),
	primary key(set_id),
	foreign key(source_id) references source(source_id)
);
create table minifigure (
	bl_id varchar(10),
	minifig_name varchar(50) not null,
	is_unique boolean not null default 1,
	primary key(bl_id)
);
create table battle_pack_has_minifigure (
	id int auto_increment,
	set_id varchar(10),
	bl_id varchar(10),
	primary key(set_id, bl_id),
	foreign key(set_id) references battle_pack(set_id),
	foreign key(bl_id) references minifigure(bl_id)
);

-- fish
create table bundle (
	bundle_id int auto_increment,
	bundle_name varchar(30) not null,
	primary key(bundle_id)
);
create table fish (
	fish_id int auto_increment,
	fish_name varchar(30) not null,
	base_price int not null,
	bundle_id int,
	time_range varchar(10),
	weather enum('Any', 'Sun', 'Sun or wind', 'Rain') not null,
	primary key(fish_id),
	foreign key(bundle_id) references bundle(bundle_id)
);
create table season (
	season_id int,
	season_name varchar(10),
	primary key(season_id)
);
create table fish_in_season (
	fish_id int,
	season_id int,
	primary key(fish_id, season_id),
	foreign key(fish_id) references fish(fish_id),
	foreign key(season_id) references season(season_id)
);
create table location (
	location_id int auto_increment,
	location_name varchar(30),
	primary key(location_id)
);
create table fish_in_location (
	fish_id int,
	location_id int,
	primary key(fish_id, location_id),
	foreign key(fish_id) references fish(fish_id),
	foreign key(location_id) references location(location_id)
);
