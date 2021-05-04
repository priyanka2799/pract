from tkinter import Tk, Canvas, Frame, BOTH
import tkinter
import re
import math
import os
os.system('cls')

comd=[]
x=20;t=20

print(" ")
print("Screen size: 750mm x 500mm. Please change the dimensions of the shape accordingly")
print(" ")
name=input("Project Name: ")
for i in range(1,100,1):
    y=input("N"+str(i)+":  ")
    if y=="M30":
        break
    val=[float(s) for s in re.findall(r'[-\d\.\d]+', y)]
    coord=[s for s in re.findall(r'[A-Z]', y)]
    # print(coord)
    l=[]
    if coord[0]=='G':
        l.append(val[0])
    else:
        continue
    k=1;chk=0
    while k<len(val):
        if coord[k]=='X':
            l.append(val[k]+20)
            chk=1
            break
        k+=1
    if chk==0:
        l.append(x)

    k=1;chk=0
    while k<len(val):
        if coord[k]=='Y':
            l.append(val[k]+20)
            chk=1
            break
        k+=1
    if chk==0:
        l.append(t)

    x=l[1];t=l[2]
    comd.append(l)
# print(comd)

class cnc(Frame):

    def __init__(self):
        super().__init__()

        self.initUI()


    def initUI(self):

        self.master.title(name)
        self.pack(fill=BOTH, expand=1)

        canvas = Canvas(self)

        prev_x=0;prev_y=0
        for l in comd:
            if l[0]==0:
                prev_x=l[1]
                prev_y=l[2]
            if l[0]==1:
                canvas.create_line(prev_x, prev_y, l[1], l[2], width=3)
                prev_x=l[1]
                prev_y=l[2]
            if l[0]==2:
                p1=[l[1],l[2]];p0=[prev_x,prev_y]
                extend_x = (math.sqrt((p0[0] - p1[0])**2 + (p0[1] - p1[1])**2) -(p1[0]-p0[0]))/2  
                extend_y = (math.sqrt((p0[0] - p1[0])**2 + (p0[1] - p1[1])**2) -(p1[1]-p0[1]))/2 
                startAngle = math.atan2(p0[0] - p1[0], p0[1] - p1[1]) *180 / math.pi   
                arc=canvas.create_arc(p0[0]-extend_x, p0[1]-extend_y,p1[0]+extend_x, p1[1]+extend_y, extent=180, start=90+startAngle, style=tkinter.ARC,width=3)
                prev_x=l[1]
                prev_y=l[2]
            if l[0]==3:
                p1=[l[1],l[2]];p0=[prev_x,prev_y]
                extend_x = (math.sqrt((p0[0] - p1[0])**2 + (p0[1] - p1[1])**2) -(p1[0]-p0[0]))/2  
                extend_y = (math.sqrt((p0[0] - p1[0])**2 + (p0[1] - p1[1])**2) -(p1[1]-p0[1]))/2 
                startAngle = math.atan2(p0[0] - p1[0], p0[1] - p1[1]) *180 / math.pi  
                arc=canvas.create_arc(p0[0]-extend_x, p0[1]-extend_y,p1[0]+extend_x, p1[1]+extend_y, extent=-180, start=90+startAngle, style=tkinter.ARC,width=3)
                prev_x=l[1]
                prev_y=l[2]

        canvas.pack(fill=BOTH, expand=1)


def main():

    root = Tk()
    ex = cnc()
    root.geometry("790x540+300+300")
    root.mainloop()


if __name__ == '__main__':
    main()