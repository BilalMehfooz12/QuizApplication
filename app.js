function func()
{
    var score=0
    var right1=document.getElementById("q1-a1")
    var q1_as2=document.getElementById("q1-a2")
    var q1_as3=document.getElementById("q1-a3")
    var q1_as4=document.getElementById("q1-a4")
    if(right1.checked==true)
    {
        score++
        // alert("Anwser1 is write")
    }
    // else
    // {
    //     alert("Answer1 is wrong")
    // }



    var right2=document.getElementById("q2-a3")
    var q2_a1=document.getElementById("q2-q1")
    var q2_a2=document.getElementById("q2-q2")
    var q2_a4=document.getElementById("q2-q4")
    if(right2.checked==true)
    {
        score++
        // alert("Answer2 is write")
    }
    // else
    // {
    //     alert("Answer2 is wrong")
    // }


    var right3=document.getElementById("q3-a4")
    var q3_a1=document.getElementById("q3-q1")
    var q3_a2=document.getElementById("q3-q2")
    var q3_a3=document.getElementById("q3-q3")
    if(right3.checked==true)
    {
        score++

        // alert("Total Score Is "+score)
        // document.write(score)
    }
    document.write(score)
    // else
    // {
    //     alert("Answer3 is wrong")
    // }
}