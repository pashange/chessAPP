function buildBOARD(POV = "white") {

    var boardFILE = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var boardDIVS = `
        <div id="boardRANK"></div>
        <div id="boardMAIN">
            <div id="boardIMAGE"></div>
            <div id="boardGRID"></div>
        </div>
        <div id="boardFILE"></div>
    `;

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
                $("#boardGRID").append(`<div id="square${boardFILE[file]}${8 - rank}" file="${boardFILE[file]}" rank="${8 - rank}">${boardFILE[file]}${8 - rank}</div>`);
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
                    $("#boardGRID").append(`<div id="square${boardFILE[7-file]}${rank+1}" file="${boardFILE[7-file]}" rank="${rank+1}">${boardFILE[7-file]}${rank+1}</div>`);
            } if(squareCOLOUR == "light") {squareCOLOUR = "dark"} else {squareCOLOUR = "light"}
        }
    }
    
    boardIMAGE += "</svg>"
    $("#boardIMAGE").html(boardIMAGE)
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