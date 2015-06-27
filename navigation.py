import math


class angle_magnitude(object):
    angle = 0
    magnitude = 0


def get_normal(x, y):
    return math.sqrt(x*x + y*y)


# class ship_status:
#     x = 1
#     y = 1
#     dx = -.52
#     dy = 2.954


def navigate_to_point(x, y, ship_status):
    vector = angle_magnitude()
    d_x = x-ship_status["x"]
    d_y = y-ship_status["y"]
    d_magnitude = get_normal(d_x, d_y)
    if(d_magnitude == 0):
        return vector  # We are where we want to be
    else:
        d_x_n = d_x/d_magnitude
        d_y_n = d_y/d_magnitude

    v_magnitude = get_normal(ship_status["dx"], ship_status["dy"])
    if(v_magnitude == 0):
        v_x_n = 0
        v_y_n = 0
    else:
        v_x_n = ship_status["dx"]/v_magnitude
        v_y_n = ship_status["dy"]/v_magnitude

    a_x = d_x_n - v_x_n
    a_y = d_y_n - v_y_n
    print("Moving ship " + str(a_x) + " " + str(a_y))
    vector.angle = math.atan2(-a_y, -a_x) + math.pi
    vector.magnitude = 1
    return vector

#pi right
#2pi left
#2/pi down
# 3pi/2 up
