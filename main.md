# Try Or Coppy Button Code
```html
<button><ahref="https://onlinegdb.com/TGFwvORJi"class="none">TryOrCoppyCode</a></button>
<style>
button{
  background: #5E5DF0;
  border-radius: 10px;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
                  cursor: pointer;
                  font-size: 26px;
                  font-weight: 700;
                  line-height: 24px;
                  opacity: 1;
                  width: 100px;
                  height: 50px;
                  outline: 0 solid transparent;
                  padding: 8px 18px;
                  user-select: none;
                  -webkit-user-select: none;
                  touch-action: manipulation;
                  width: fit-content;
                  word-break: break-word;
                  border: 0;
                  transition: linear 0.5s;
                }
                button:hover{
                  transform: perspective(2px)
                        skew(3deg,3deg)		
                    ;
                }
  .none{
    color: #FFFFFF;
    text-decoration: none;
  }
</style>
```
# Customize ScrollBar
```css
    ::-webkit-scrollbar {
      width: 10px;
      background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);
    }
    
    
    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      border: none;
    }
    
    body::-webkit-scrollbar-thumb {
      background-image: linear-gradient(-45deg, #6a5af9, #d66efd);
      border-radius: 50px;
      max-height: 100px;
    }

```
# Fix Navbar
```css
  .navbar-secs {
  overflow: auto;
  white-space: nowrap;
  background-color: transparent;
  font-family: 'baloo 2', cursive;
  position: fixed;
  opacity: 2;
  background: #241B2F;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  width: 100%;
  color: #7883DD;
  box-shadow: #8D92FF 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

/* Links inside the navbar-secs */
.navbar-secs a {
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  display: inline-block;
}

/* The dropdown container */
.dropdown {
  display: inline-block;
}

/* Dropdown button */
.dropdown .dropbtn {
  display: inline-block;
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit;
  /* Important for vertical align on mobile phones */
  margin: 0;
}

/* Add a red background color to navbar-secs links on hover */
.navbar-secs a:hover,
.dropdown:hover .dropbtn {
  border-radius: 10px;
  transform: translateY(-5px);
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: fixed;
  background-color: #22162B;
  width: 100%;
  left: 0;
  height: 410px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: linear 0.75s;
}

/* Mega Menu header, if needed */
.dropdown-content .header {
  padding: 16px;
  color: white;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: grid;
  position: fixed;
  transition: linear 0.75s;
  border-bottom-right-radius: 8px;
}

/* Create three equal column-nv"s that floats next to each other */
.column-nv {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: #1E183A;
  height: 350px;
}

/* Style links inside the column-nv"s */
.column-nv a {
  float: none;
  color: #CCD6E0;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.column-nv a:hover {
  background-color: #ddd;
  color: #22162B;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Fixed/sticky icon bar (vertically aligned 50% from the top of the screen) */
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

/* Style the icon bar links */
.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 15px;
}

/* Style the social media icons with color, if you want */
.icon-bar a:hover {
  transform: translateX(+6px);
}

.facebook {
  background: #3B5998;
  color: white;
  margin-bottom: 15px;
}

.twitter {
  background: #55ACEE;
  color: white;
}

.google {
  background: #dd4b39;
  margin-bottom: 15px;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
}

```
# Assets 
* **Icon**: 
  https://firebasestorage.googleapis.com/v0/b/moondecial.appspot.com/o/moondicial.ico?alt=media&token=4b7ba913-7a84-4d0e-901d-e9b53dade202
  