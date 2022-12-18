function setUP() {

    var boardDIVS = `
        <div id="boardRANK"></div>
        <div id="boardMAIN">
            <div id="boardIMAGE"></div>
            <div id="boardGRID"></div>
        </div>
        <div id="boardFILE"></div>
    `
    $("#chessboard").html(boardDIVS)
    var boardIMAGE = `<svg viewBox="0 0 8 8">`

    var squareCOLOUR;
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
                />`
        } if(squareCOLOUR == "light") {squareCOLOUR = "dark"} else {squareCOLOUR = "light"}
    }
    
    boardIMAGE += "</svg>"
    $("#boardIMAGE").html(boardIMAGE)
}