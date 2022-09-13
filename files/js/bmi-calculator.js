function validate_input(identifier) {
    try {
        var data_val = document.getElementById("bmi-left-pane-inputs-" + identifier).value;
    }
    catch (TypeError) {
        console.log("No", identifier)
    }
    console.log("Data val", data_val)
    if (data_val == "") {
        document.getElementById("bmi-left-pane-inputs-" + identifier + "_error").innerHTML = "This field cannot be empty"
        document.getElementById("bmi-left-pane-button").disabled = true;
    }
    else {
        check_nan(data_val, identifier)
    }


}

function check_nan(data_val, identifier) {
    if (isNaN(data_val)) {
        console.log("Not a number =", isNaN(data_val))
        document.getElementById("bmi-left-pane-inputs-" + identifier + "_error").innerHTML = "Not a number"
        document.getElementById("bmi-left-pane-button").disabled = true;
    }
}

function calculate_bmi() {
    if (document.getElementById('bmi-left-pane-inputs-height').value != "" || document.getElementById('bmi-left-pane-inputs-weight').value != "") {
        let height_val = parseInt(document.getElementById('bmi-left-pane-inputs-height').value, 10)
        let weight_val = parseInt(document.getElementById('bmi-left-pane-inputs-weight').value, 10)
        const bmi = weight_val / (height_val * height_val) * 10000
        const precise_bmi = bmi.toFixed(2);
        let remark = ""
        if (precise_bmi < 18.5) {
            remark = "Underweight"
        }
        else if (precise_bmi > 18.5 & precise_bmi < 24.9) {
            remark = "Healthy Weight"
        }
        else if (precise_bmi > 25 & precise_bmi < 29.9) {
            remark = "Overweight"
        }
        else {
            remark = "Obese"
        }
        console.log("BMI:", precise_bmi, "Remark:", remark)
        document.getElementById('bmi-right-pane-card-bmi-result').innerHTML = `<h1>${precise_bmi}</h1><p>You are in the ${remark} range.</p>`
    }
    else {
        document.getElementById("bmi-left-pane-inputs-" + "height" + "_error").innerHTML = "This field cannot be empty"
        document.getElementById("bmi-left-pane-inputs-" + "weight" + "_error").innerHTML = "This field cannot be empty"
    }
}