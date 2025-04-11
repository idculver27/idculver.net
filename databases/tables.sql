-- fish
create table sv_bundle (
	bundle_id int not null auto_increment,
	bundle_name varchar(30) not null,
	primary key(bundle_id)
);
create table sv_fish (
	fish_id int not null auto_increment,
	fish_name varchar(30) not null,
	base_price int not null,
	bundle_id int,
	time_range varchar(10),
	weather enum('Any', 'Sun', 'Sun or wind', 'Rain') not null,
	primary key(fish_id),
	foreign key(bundle_id) references sv_bundle(bundle_id)
);
create table sv_season (
	season_id int not null auto_increment,
	season_name varchar(10) not null,
	primary key(season_id)
);
create table sv_fish_in_season (
	fish_id int not null,
	season_id int not null,
	primary key(fish_id, season_id),
	foreign key(fish_id) references sv_fish(fish_id),
	foreign key(season_id) references sv_season(season_id)
);
create table sv_location (
	location_id int not null auto_increment,
	location_name varchar(30) not null,
	primary key(location_id)
);
create table sv_fish_in_location (
	fish_id int not null,
	location_id int not null,
	primary key(fish_id, location_id),
	foreign key(fish_id) references sv_fish(fish_id),
	foreign key(location_id) references sv_location(location_id)
);
