#ifndef __LISTENER_H
#define __LISTENER_H

void listener_init(int);
void listener_quit(void);

typedef struct {
	double airspeed;
	double altitude;
	double pitch;
	double roll;
	double slip;
	double baroQFE;
	double magneticCourse;
} sensor_data;

void listener_get(sensor_data*);

#endif // __LISTENER_H
