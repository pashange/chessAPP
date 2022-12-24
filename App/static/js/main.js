function buildBOARD(POV = "white") {

    var boardFILE = ["A", "B", "C", "D", "E", "F", "G", "H"];
    if(POV == "white"){
    
        var boardDIVS = `
            <div id="boardRANK">
                <div>8</div>
                <div>7</div>
                <div>6</div>
                <div>5</div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
                <div>1</div>
            </div>
            <div id="boardMAIN">
                <div id="boardIMAGE"></div>
                <div id="boardGRID"></div>
            </div>
            <div id="boardFILE">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
                <div>E</div>
                <div>F</div>
                <div>G</div>
                <div>H</div>
            </div>
    `;} else {
    
        var boardDIVS = `
            <div id="boardRANK">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
            </div>
            <div id="boardMAIN">
                <div id="boardIMAGE"></div>
                <div id="boardGRID" POV="${POV}"></div>
            </div>
            <div id="boardFILE">
                <div>H</div>
                <div>G</div>
                <div>F</div>
                <div>E</div>
                <div>D</div>
                <div>C</div>
                <div>B</div>
                <div>A</div>
            </div>
    `;}

    $("#chessboard").html(boardDIVS);
    var boardIMAGE = `<svg viewBox="0 0 8 8">`;

    var squareCOLOUR;
    if(POV == "white") {

        for(rank = 0; rank < 8; rank ++){
            for(file = 0; file < 8; file ++) {
                if(squareCOLOUR == "light") {squareCOLOUR = "dark"} else {squareCOLOUR = "light"}
                boardIMAGE += `
                    <rect
                        x="${rank}"
                        y="${file}"
                        width="12.5%"
                        height="12.5%"
                        class="${squareCOLOUR}"
                    />`;
                $("#boardGRID").append(`<div id="square${boardFILE[file]}${8 - rank}" file="${boardFILE[file]}" rank="${8 - rank}" class="boardEMPTY_SQUARE">${boardFILE[file]}${8 - rank}</div>`);
            } if(squareCOLOUR == "light") {squareCOLOUR = "dark"} else {squareCOLOUR = "light"}
        }
    } else {

        for(rank = 0; rank < 8; rank ++){
            for(file = 0; file < 8; file ++) {
                if(squareCOLOUR == "light") {squareCOLOUR = "dark"} else {squareCOLOUR = "light"}
                boardIMAGE += `
                    <rect
                        x="${rank}"
                        y="${file}"
                        width="12.5%"
                        height="12.5%"
                        class="${squareCOLOUR}"
                    />`;
                    $("#boardGRID").append(`<div id="square${boardFILE[7-file]}${rank+1}" file="${boardFILE[7-file]}" rank="${rank+1}" class="boardEMPTY_SQUARE">${boardFILE[7-file]}${rank+1}</div>`);
            } if(squareCOLOUR == "light") {squareCOLOUR = "dark"} else {squareCOLOUR = "light"}
        }
    }
    
    boardIMAGE += "</svg>"
    $("#boardIMAGE").html(boardIMAGE)
}

function rotateBOARD(POV = false) {

    if(POV == false) {
        if($("#boardGRID").attr("POV") == "white") {
            POV = "black";
        } else {
            POV = "white";
        }
    }
    var boardFILE = ["A", "B", "C", "D", "E", "F", "G", "H"];
    $("#boardGRID").html("")
    if(POV == "white") {

        for(rank = 0; rank < 8; rank ++){
            for(file = 0; file < 8; file ++) {

                $("#boardGRID").append(`<div id="square${boardFILE[file]}${8 - rank}" file="${boardFILE[file]}" rank="${8 - rank}" class="boardEMPTY_SQUARE">${boardFILE[file]}${8 - rank}</div>`);
            }
        }
        $("#boardRANK").html(`<div>8</div>
                              <div>7</div>
                              <div>6</div>
                              <div>5</div>
                              <div>4</div>
                              <div>3</div>
                              <div>2</div>
                              <div>1</div>`)
        $("#boardFILE").html(`<div>A</div>
                              <div>B</div>
                              <div>C</div>
                              <div>D</div>
                              <div>E</div>
                              <div>F</div>
                              <div>G</div>
                              <div>H</div>`)
    } else {

        for(rank = 0; rank < 8; rank ++){
            for(file = 0; file < 8; file ++) {

                    $("#boardGRID").append(`<div id="square${boardFILE[7-file]}${rank+1}" file="${boardFILE[7-file]}" rank="${rank+1}" class="boardEMPTY_SQUARE">${boardFILE[7-file]}${rank+1}</div>`);
            }
        }
        $("#boardRANK").html(`<div>1</div>
                              <div>2</div>
                              <div>3</div>
                              <div>4</div>
                              <div>5</div>
                              <div>6</div>
                              <div>7</div>
                              <div>8</div>`)
        $("#boardFILE").html(`<div>H</div>
                              <div>G</div>
                              <div>F</div>
                              <div>E</div>
                              <div>D</div>
                              <div>C</div>
                              <div>B</div>
                              <div>A</div>`)
    } $("#boardGRID").attr("POV", POV);
    setBOARD();
}

function setBOARD(fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1") {

    var boardFILE = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var boardARRAY = [];
    for(char = 0; char < fen.length; char++) {

        var fenchar = fen[char]
        if(/^\d+$/.test(fenchar)){

            for(iter = 0; iter < +fenchar; iter++){

                boardARRAY.push("1")
            }  
        } else if(fenchar == "/") {
            
        } else if(fenchar == " ") {
            
            break;
        } else {
            boardARRAY.push(fenchar)
        }
    }
    for(rank = 8; rank > 0; rank--) {
        for(file = 7; file >= 0; file--) {

            var index = 63 - ((rank - 1)*8 + file);
            if(boardARRAY[index] == 1) {
                
                $(`#square${boardFILE[7-file]}${rank}`).html("")
                continue;
            }
            $(`#square${boardFILE[7-file]}${rank}`).html(`<p class="boardPIECE" draggable="true">${boardARRAY[index]}</p>`)
            // $(`#square${boardFILE[7-file]}${rank}`).attr("draggable", true)
            // $(`#square${boardFILE[7-file]}${rank}`).removeClass("boardEMPTY_SQUARE")
            // $(`#square${boardFILE[7-file]}${rank}`).addClass("boardPIECE_SQUARE")

            
            
        }
    }
    $(".boardPIECE").each(function(){

        this.addEventListener("dragstart", dragStart);
        this.addEventListener("drag", dragMid);
        this.addEventListener("dragend", dragEnd);
    })
    console.log(boardARRAY)
}

function dragStart(){

    this.classList.add('hold');
    piece_html = $(this)[0];
    // start_square = $($(this.parentNode)[0]).attr("value");
    setTimeout(() => (this.className = 'invisible'), 0); 
}

function dragMid(e) {

    e.preventDefault();
    // e.target.style.opacity = 1
    console.log(e.target.style.opacity) 

}
function dragEnd(e) {

    this.className = 'boardPIECE';
}

function test() {

    console.log("RAN THRU")
    document.getElementById("boardGRID").addEventListener('mouseover', function(event) {
        // Check if the element being hovered over is a grid row
        if (event.target.classList.contains('grid-row')) {
          // Get the row index of the element being hovered over
          var rowIndex = event.target.rowIndex;
          console.log('You are hovering over grid row ' + rowIndex);
        }
    });
}