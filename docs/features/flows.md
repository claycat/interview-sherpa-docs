---
sidebar_position: 1
---

# Flows 

The term **"flow"** (coined from the library [react-flow](https://reactflow.dev/) that this project depends on) refers to the mindmap on the screen.

import Image from '@theme/IdealImage';

<center>
  <Image img={require('./img/image.png')} style={{width: 600}} />
</center>

## Nodes

Nodes refer to rectangles holding the interview question

### Adding Nodes

Interview sherpa offers capabilities to add new nodes by clicking and dragging on the handle.

<center>
  <Image img={require('./img/addflow.gif')} style={{width: 600}} />
</center>

### Resize and Drag

You can also move and resize nodes to fit your desired position and size

<center>
  <Image img={require('./img/movenresize.gif')} style={{width: 600}} />
</center>

### Editing Nodes

Node contents are editable. 

Just double click on them, and edit the textbox on the modal, and they will be reflected on the flow.

<center>
  <Image img={require('./img/editnode.gif')} style={{width: 600}} />
</center>


### Removing Nodes

Don't have this feature yet, but it is on [my list](https://github.com/claycat/interview-sherpa-be-mono/issues/27)


## Edges

Edges refer to lines that connect the nodes together.

### Adding Edges

You can add edges between nodes to connect them.

<center>
  <Image img={require('./img/addedge.gif')} style={{width: 600}} />
</center>

### Removing Edges

You can remove edges connecting nodes.

<center>
  <Image img={require('./img/removeedge.gif')} style={{width: 600}} />
</center>

  
  


# 
#
#
#
#



Anything **unclear** or **buggy** in this document? [Please report it!](https://github.com/claycat/interview-sherpa-be-mono/issues)

