import os
import platform


def text_to_speech(tosay):
    if platform.system().lower() == "linux":
        os.system("echo " + tosay + "| espeak -s 100")
    elif platform.system().lower() == "darwin":
        os.system("echo " + tosay + "| say")
    else:
        print("Don't know how to speech synthasize on this platform")
