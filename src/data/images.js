/**
 * This file store all the images used in this website.
 */

const baseURL = process.env.PUBLIC_URL + '/assets/images/';

const images = {
    logo128: baseURL + 'logo128.PNG',
    logo512: baseURL + 'logo512.PNG',
    logo654: baseURL + 'logo654.PNG',
    modelisation3D:{
		constraints: baseURL + 'robot_constraints.png',
		fusion_logo: baseURL + 'fusion_logo.PNG',
		robot_front: baseURL + 'robot_model_front.png',
		robot_back: baseURL + 'robot_model_back.png',
	},
	themeCup:{
		table_blueprint: baseURL + 'table_blueprint.jpeg',
		shuffle_buoy: baseURL + 'shuffle_buoy.png',
		robot_positions: baseURL + 'robot_positions.PNG',
		table_blueprint_detailed: baseURL + 'table_blueprint_detailed.PNG',
		table_sweep: baseURL + 'table_sweep.png',
		table_windsock: baseURL + 'table_windsock.PNG',
		table_upView: baseURL + 'table_upView.PNG',
		table_zones: baseURL + 'table_zones.png',
		compass: baseURL + 'compass.PNG',
		validity_robot: baseURL + 'validity_robot.png',
		validity_buoy: baseURL + 'validity_buoy.PNG',
	},
	imtAtlantique:{
		mixImages: baseURL + 'imt.png',
	},
	detectionEcueils:{
		model: baseURL + 'detection_model.PNG',
		sensor: baseURL + 'detection_sensor.PNG',
		setup: baseURL + 'detection_setup.PNG',
		setup_blueprint: baseURL + 'detection_setup_blueprint.png',
		code1: baseURL + 'detection_code1.PNG',
		code2: baseURL + 'detection_code2.PNG',
		code3: baseURL + 'detection_code3.png',
	},
	clubNantes:{
		//team: baseURL + 'club_nantes.jpeg',
		charlie: baseURL + 'charlie.jpeg',
		kamil: baseURL + 'kamil.jpg',
		theo: baseURL + 'theo.jpeg',
		sebastian: baseURL + 'sebastian.jpeg',
		victor: baseURL + 'victor.jpeg',
		alexis: baseURL + 'alexis.jpeg',
		kevin: baseURL + 'kevin.png',
	},
	clubBrest:{
		//team: baseURL + 'club_brest.jpeg',
		aziz: baseURL + 'aziz.jpeg',
		xiayue: baseURL + 'xiayue.jpg',
		sean: baseURL + 'sean.jpg',
		esteban: baseURL + 'esteban.jpeg',
		maxence: baseURL + 'maxence.jpeg',
		jeremy: baseURL + 'jeremy.jpeg',
	},
	cup2020:{
		match: baseURL + 'cup2020.jpg',
		results: baseURL + 'results_2020.PNG',
	},
	testMotors: {
		motor: baseURL + 'motor.PNG',
		coder: baseURL + 'motor_coder.PNG',
		robotshop: baseURL + 'motor_robotshop.PNG',
		disk: baseURL + 'motor_disk.PNG',
		shelf : baseURL + 'motor_shelf.PNG',
		experience : baseURL + 'motor_experience.PNG',
	},
	simulation:{
		interface: baseURL + 'webots_interface.png',
		lds: baseURL + 'LDS-01.png',
		webots_logo: baseURL + 'webots_logo.png',
		robot_model: baseURL + 'simulation_robot_model.png',
	},
	detectionTags:{
		compass_tag: baseURL + 'compass_tag.PNG',
		compass: baseURL + 'compass.PNG',
		charuco_board: baseURL + 'charuco_board.PNG',
		demo1: baseURL + 'demo_tag1.PNG',
		demo2: baseURL + 'demo_tag2.PNG',
		tag_cases: baseURL + 'tag_cases.PNG',
		equipment: baseURL + 'tag_equipment.PNG',
		results: baseURL + 'tag_results.PNG',
		tag: baseURL + 'tag.PNG',
		tag1: baseURL + 'tag1.PNG',
		tag2: baseURL + 'tag2.png',
		tag3: baseURL + 'tag3.png',
		tag4: baseURL + 'tag4.png',
	},
	detectionColor:{
		arduino: baseURL + 'color_arduino.png',
		code: baseURL + 'color_code.png',
		harbor: baseURL + 'table_harbor.png',
		table_sensors: baseURL + 'color_table_sensors.png',
		sensor_TCS3200: baseURL + 'TCS3200.png',
		sensor_TCS34725: baseURL + 'TCS34725.png',
	},
	equipment:{
		wheels: baseURL + 'wheels.png',
		motor: baseURL + 'motor.PNG',
		base: baseURL + 'base.png',
	},
	lidar: {
		window: baseURL + 'lidar_window.png',
		rplidar: baseURL + 'rplidar.PNG',
		sdk: baseURL + 'sdk.png',
	},
	strategy: {
		table_blueprint: baseURL + 'table_blueprint.jpeg',
		table_upView: baseURL + 'table_upView.PNG',
	},
	flag:{
		blueprint: baseURL + 'flag_spring.png',
		model1: baseURL + 'flag1.png',
		model2: baseURL + 'flag2.png',
	},
	makingTable:{
		table: baseURL + 'table.png',
		pieces: baseURL + 'table_pieces.PNG',
		drawings: baseURL + 'table_pieces_drawing.png',
		windsock: baseURL + 'windsock.PNG',
	},
	enslavement: {
		table1: baseURL + 'enslavement_table1.png',
		table2: baseURL + 'enslavement_table2.png',
		blueprint: baseURL + 'enslavement_blueprint.png',
	},
	actuator: {
		blueprint: baseURL + 'actuator_blueprint.png'
	}
};

export default images;