1.	We have following object(s);
Department:
[
    {deptId: ‘1’, deptName: ‘Deliveries’},
    {deptId: ‘2’, deptName: ‘Sales’},
    {deptId: ‘3’, deptName: ‘Accounts’},
    {deptId: ‘4’, deptName: ‘Marketing’},
    {deptId: ‘5’, deptName: ‘IT’’},
       ]
 
Position:
[
    {posId: ‘1’, posName: ‘Sr Developer, deptId: ‘1’},
    {posId: ‘2’, posName: ‘Jr Developer, deptId: ‘1’},
    {posId: ‘3’, posName: ‘Programm Manager, deptId: ‘1’},
    {posId: ‘4’, posName: ‘Architect, deptId: ‘1’},
    {posId: ‘5’, posName: ‘Associate Executive, deptId: ‘2’},
    {posId: ‘6’, posName: ‘Sales Executive, deptId: ‘2’},
    {posId: ‘7’, posName: ‘Accounts Officer, deptId: ‘3’},
    {posId: ‘8’, posName: ‘Chief Accounts Officer, deptId: ‘3’},
    {posId: ‘9’, posName: ‘Associate Representative, deptId: ‘4’},
    {posId: ‘10’, posName: ‘Sr Presentative, deptId: ‘4’},
    {posId: ‘11’, posName: ‘IT Engineer, deptId: ‘5’},
]
 
Zone:
[
    {zoneId: ‘1’, zoneName: ‘North},
    {zoneId: ‘2’, zoneName: ‘East},
    {zoneId: ‘3’, zoneName: ‘South},
    {zoneId: ‘4’, zoneName: ‘West},
];
 
Employee:
[
    {employeeId: ‘1’, firstName: ‘Nirav’, lastName: ‘Sarvaiya’, department: ‘1’, position: ‘1’, zone: ‘1’},
    {employeeId: ‘1’, firstName: ‘Sudhanshu’, lastName: ‘Pandey, department: ‘2’, position: ‘5’, zone: ‘3’},
];
 
 
2.	Display this data on UI;
 
3.	When user clicks on “ ” (Add) or  “ ” (Edit) button, Navigate to form which should be as follows;
 
4.	In above form Position, Zone & Department are dropdowns. Position should be loaded as per department. Position department linking is available in Position object above. Dropdowns are as follows;
Department
 
Position
 
Zone
 
5.	Clicking on “ ” (Delete) icon should remove the record from object as well as from UI.
