
    //console.log("Updating FCC Extension...");
    var chatters=0;
    var title="";
    var html="";
    
      $.getJSON("http://www.funchatcam.com/api/online.php",function(result){


      //console.log("result from api");
      console.log(result);

      $.each(result, function(i, field){

        gender = 'male';
        if(result[i].gender == '1') gender = 'male';
        if(result[i].gender == '2') gender = 'female';
        if(result[i].gender == '3') gender = 'couple';

        pro = result[i].pro;
        if(pro == '1') {
            pro = 'pro';
        } else {
            pro = 'notpro';
        }

        server = result[i].chatserver_name;
        room = result[i].room;

        html = html + '<li title="'+server+ ' - ' +room+ '" class="user '+gender+ ' ' +pro+ '">' + result[i].username + '</li>';
        chatters++;
        });
        
        chatters = chatters.toString();

        if(chatters == "0") {
            $("#users").html("<h2>No users online</h2>");
        } else {
            $("#users").html(html);
        }
    });	
  