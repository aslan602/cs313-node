const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/postage", getPostage);

// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
});

function getPostage(req, res) {
  const pack = req.query.package;
  const wt = Number(req.query.weight);
  findPrice(res, pack, wt);
}

function findPrice(res, package, weight) {
	

	let price = "";

	if (package == "Stamped Letter") {
		if (weight <= 1) {
      price = ".55";
    }
    else if (weight > 1 && weight <= 2) {
      price = ".70";
    }
    else if (weight > 2 && weight <= 3) {
      price = ".85";
    }
    else {
      price = "1.00";
    }

	} else if (package == "Metered Letter") {
    if (weight <= 1) {
      price = ".50";
    }
    else if (weight > 1 && weight <= 2) {
      price = ".65";
    }
    else if (weight > 2 && weight <= 3) {
      price = ".80";
    }
    else {
      price = ".95";
    }
			
	} else if (package == "Large Envelope") {
    if (weight <= 1) {
      price = "1.00";
    }
    else if (weight > 1 && weight <= 2) {
      price = "1.20";
    }
    else if (weight > 2 && weight <= 3) {
      price = "1.40";
    }     
    else if (weight > 3 && weight <= 4) {
      price = "1.60";
    }
    else if (weight > 4 && weight <= 5) {
      price = "1.80";
    }    
    else if (weight > 5 && weight <= 6) {
      price = "2.00";
    }
    else if (weight > 6 && weight <= 7) {
      price = "2.20";
    }   
    else if (weight > 7 && weight <= 8) {
      price = "2.40";
    }
    else if (weight > 8 && weight <= 9) {
      price = "2.60";
    }   
    else if (weight > 9 && weight <= 10) {
      price = "2.80";
    }
    else if (weight > 10 && weight <= 11) {
      price = "3.00";
    }    
    else if (weight > 11 && weight <= 12) {
      price = "3.20";
    }
    else if (weight > 12 && weight <= 13) {
      price = "3.40";
    }
    else {
      price = "3.40";
    }

	} else if (package == "First Class Package Service") {
    if (weight <= 1) {
      price = "3.80";
    }
    else if (weight > 1 && weight <= 2) {
      price = "3.80";
    }
    else if (weight > 2 && weight <= 3) {
      price = "3.80";
    }     
    else if (weight > 3 && weight <= 4) {
      price = "3.80";
    }
    else if (weight > 4 && weight <= 5) {
      price = "4.60";
    }    
    else if (weight > 5 && weight <= 6) {
      price = "4.60";
    }
    else if (weight > 6 && weight <= 7) {
      price = "4.60";
    }   
    else if (weight > 7 && weight <= 8) {
      price = "4.60";
    }
    else if (weight > 8 && weight <= 9) {
      price = "5.30";
    }   
    else if (weight > 9 && weight <= 10) {
      price = "5.30";
    }
    else if (weight > 10 && weight <= 11) {
      price = "5.30";
    }    
    else if (weight > 11 && weight <= 12) {
      price = "5.30";
    }
    else if (weight > 12 && weight <= 13) {
      price = "5.90";
    }
    else {
      price = "5.90";
    }
	
	} else {
		// It would be best here to redirect to an "unknown operation"
    // error page or something similar.
    res.render('pages/404');
	}

	// Set up a JSON object of the values we want to pass along to the EJS result page
	const params = {package: package, price: price, weight: weight};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	res.render('pages/gotPrice', params);

}