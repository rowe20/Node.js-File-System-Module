var fs = require("fs");

const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var options = () => {
    console.log("1.Create Directory");
    console.log("2.Remove Directory");
    console.log("3.Write FIle");
    console.log("4.Read FIle");
    console.log("5.Delete FIle");
    console.log("6.Append data to FIle");
    console.log("7.Update / Replace file with new data");
    console.log("8.Rename File");
    choice();
}
var choice = () => {
    r1.question("Enter the choice: ", (call) =>{
        if(call === "1")
        {
            console.log("Create Directory");
            createdir();
        }
        else if(call === "2")
        {
            console.log("remove direc");
            removedir();
        }
        else if(call === "3")
        {
            console.log("Write File:");
            writefl();
        }
        else if(call === "4")
        {
            console.log("read ");
            readfl();
        }
        else if(call === "5")
        {
            console.log("delete");
            deletefl();
        }
        else if(call === "6")
        {
            console.log("Append");
            appendfl();
        }
        else if(call === "7")
        {
            console.log("Update / Replace");
            updatefl();
        }
        else if(call === "8")
        {
            console.log("rename");
            renamefl();
        }
        else
        {
            console.log("completed!!");
            r1.close();
        }
    })
}
options();


var createdir = () =>{
    r1.question("Enter the name of directory you wouldd like to create", (call) =>{
        var dir = "./";
        dir = dir + call;
        console.log(dir);
        fs.mkdir(dir,{ recursive: true },(err)=>{
            if (err) throw err;
            
        });
        console.log("file created succesfully");
        options();
        //r1.close();
    });
    
};

var removedir = () => {
    r1.question("Enter the name of file you want to delete",(call) =>{
        fs.rmdir(call,()=>{
            console.log("folder deleted");
            options();
        });
        console.log("not deleted/found");
    });
};

var writefl = () =>{
    r1.question("Enter the file name you want to write on : ",(fname) =>{
        r1.question("Enter the contents of the file : ",(content) =>{
        fs.writeFile(fname+".txt",content,(err) =>{
            if (err) throw err;
            console.log("Added succesfully");
            options();
        });
        console.log("Failed");
    });
    });
};

var readfl = () =>{
    r1.question("Enter the filename you want to read: ",(fname)=>{
        fs.readFile(fname,"utf8",(err,data)=>{
            if(err) throw err;
            console.log(data);
            options();
        });
        
    });
};
var deletefl = ()=>{
    r1.question("Enter the fiename you would lik to delete: ",(fname)=>{
        fs.unlink(fname,(err)=>{
            if(err) throw err;
            console.log("Deleted Succesfully!!");
            options();
        })
    })
}
var appendfl = () =>{
    r1.question("Enter the filename you want to Append: ",(fname)=>{
        r1.question("Enter the contents you want to enter in the file",(content)=>{
            fs.appendFile(fname,content,(err)=>{
                if(err) throw err;
                console.log("Appended succesfully!!");
                options();
            });
        });
        
    });
};
var updatefl = () =>{
    r1.question("Enter the file name you want to write on : ",(fname) =>{
        r1.question("Enter the contents of the file : ",(content) =>{
        fs.writeFile(fname+".txt",content,(err) =>{
            if (err) throw err;
            console.log("updatted succesfully");
            options();
        });
    });
    });
}
var renamefl = ()=>{
    r1.question("Enter the file name you want to rename",(fname)=>{
        r1.question("Enter the file name you want to rename your file to",(rename)=>{
            fs.rename(fname,rename,(err)=>
            {
                if(err) throw err;
                console.log("Rename succesfully!!");
                options();
            });
        });
    });
};
