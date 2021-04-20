var image =
["https://i.postimg.cc/MKdhy06Z/family.jpg","https://img.freepik.com/free-vector/happy-father-s-day_24908-59789.jpg?size=338&ext=jpg", "https://i.pinimg.com/originals/77/0d/cc/770dcc9114a56a7651847a12f1b00dac.jpg"]
var names = ["Family Book","Stephen/Dad", "Lavina/Mom"];
var i = 0;
function update()
{
                i++;
                var 
numbers_of_family_member_in_array = 5
                if(i > 
numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = image[i];
                var updatedName  = names[i];
  
document.getElementById("family_member_image"
).src = updatedImage;
  
document.getElementById("family_member_name"
).innerHTML = updatedName;
            }
