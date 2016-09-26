#include "listener.h"

#include <stdio.h>

int main() {
	listener_init(9930);

	sensor_data data;

	listener_get(&data);

	printf("airspeed: %lf\n", data.airspeed);
	printf("altitude: %lf\n", data.altitude);
	printf("pitch: %lf\n", data.pitch);
	printf("roll: %lf\n", data.roll);
	printf("slip: %lf\n", data.slip);
	printf("baroQFE: %lf\n", data.baroQFE);
	printf("magneticCourse: %lf\n", data.magneticCourse);
}
