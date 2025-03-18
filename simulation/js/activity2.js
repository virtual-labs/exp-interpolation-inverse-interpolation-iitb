function activity2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    xn = yi - 10;
    let btn_text = get_collapse_btn_text("Activity 2", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        $$ y(${xn}) = ?  $$
        $$ L_1 = \\frac{(y-y_2)(y-y_3)(y-y_4)}{(y_1-y_2)(y_1-y_3)(y_1-y_4)}  $$
        $$ L_2 = \\frac{(y-y_1)(y-y_3)(y-y_4)}{(y_2-y_1)(y_2-y_3)(y_2-y_4)}  $$
        $$ L_3 = \\frac{(y-y_1)(y-y_2)(y-y_4)}{(y_3-y_1)(y_3-y_2)(y_3-y_4)}  $$
        $$ L_4 = \\frac{(y-y_1)(y-y_2)(y-y_3)}{(y_4-y_1)(y_4-y_2)(y_4-y_3)}  $$
        <br>

        <div id="l-ind-div-act2" style="display:block; margin-top: 2%">
            <div class='col-12'>
                <div id='bs-inp-div' style='text-align: center; font-size: 16px;'>
                    <p style="text-align: left">Find the value of L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub>, L<sub>4</sub></p>
                    <span style='font-size: 18px;'>L<sub>1</sub></span> = 
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a41-inp' > <span id='a41-val-sp'></span><br> L<sub>2</sub> = 
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a42-inp' > <span id='a42-val-sp'></span><br> L<sub>3</sub> =
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a43-inp' > <span id='a43-val-sp'></span><br> L<sub>4</sub> =  
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a44-inp' > <span id='a44-val-sp'>
                    </span>
                </div>
                <br>
                <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation4' onclick='act2_verify_l_vals();' >Verify</button></div>
            </div>
        </div>

        <div id="yl-div-act2" style="display:none; margin-top: 2%">
            <p style="text-align: left">Find the values of X<sub>1</sub>L<sub>1</sub>, X<sub>2</sub>L<sub>2</sub>, X<sub>3</sub>L<sub>3</sub>, X<sub>4</sub>L<sub>4</sub></p>
            <span style='font-size: 18px;'>X<sub>1</sub>L<sub>1</sub></span> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a51-inp' > <span id='a51-val-sp'></span><br> X<sub>2</sub>L<sub>2</sub> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a52-inp' > <span id='a52-val-sp'></span><br> X<sub>3</sub>L<sub>3</sub> =
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a53-inp' > <span id='a53-val-sp'></span><br> X<sub>4</sub>L<sub>4</sub> =  
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a54-inp' > <span id='a54-val-sp'>
            </span>
            <br><br>
            <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation5' onclick='act2_verify_yl_vals();' >Verify</button></div>
        </div>

        <div id="y-div-act2" style="display:none;">
            <p>Y = X<sub>1</sub>L<sub>1</sub> + X<sub>2</sub>L<sub>2</sub> + X<sub>3</sub>L<sub>3</sub> + X<sub>4</sub>L<sub>4</sub></p>
            <p>
                Calculate x(${xn}) = <span style='display: inline-block'>
                    <input type='number' id='act2_y-inp' class='form-control fs-16px' />
                </span>
            </p>
            <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='act2_verify_y_value();' id='temp-btn-4' >Verify</button>

            <button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn5' onclick='exp_complete();' >Next</button>  
        </div>

    </div>`;
    maindiv.innerHTML += text;
    //hide_all_steps();
    act2_lang();
    show_step('tb3-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function act2_lang() {
    console.log("act 2 inverted x_val= ", x_val);
    console.log("act 2 inverted y_val= ", y_val);
    for (let i = 0; i < 4; i++) {
        act2_lagrn[i] = lagrange(xn, i, x_val);
    }
    console.log("act2_lagrn= ", act2_lagrn);
    [act2_l1, act2_l2, act2_l3, act2_l4] = act2_lagrn;
    console.log("ACT2 L1= ", act2_l1);
    console.log("ACT2 L2= ", act2_l2);
    console.log("ACT2 L3= ", act2_l3);
    console.log("ACT2 L4= ", act2_l4);
    act2_calculate_ly();
}
function act2_verify_l_vals() {
    let btn = document.getElementById('temp-btn-equation4');
    let inp1 = document.getElementById('a41-inp');
    let sp1 = document.getElementById('a41-val-sp');
    let inp2 = document.getElementById('a42-inp');
    let sp2 = document.getElementById('a42-val-sp');
    let inp3 = document.getElementById('a43-inp');
    let sp3 = document.getElementById('a43-val-sp');
    let inp4 = document.getElementById('a44-inp');
    let sp4 = document.getElementById('a44-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(4)), parseFloat(act2_l1.toFixed(4)))) {
        alert('L1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(4)), parseFloat(act2_l2.toFixed(4)))) {
        alert('L2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(4)), parseFloat(act2_l3.toFixed(4)))) {
        alert('L3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(4)), parseFloat(act2_l4.toFixed(4)))) {
        alert('L4 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${act2_l1.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${act2_l2.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${act2_l3.toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${act2_l4.toFixed(4)}`;
    let div = (document.getElementById('yl-div-act2'));
    div.style.display = 'block';
}
function act2_verify_yl_vals() {
    let btn = document.getElementById('temp-btn-equation5');
    let inp1 = document.getElementById('a51-inp');
    let sp1 = document.getElementById('a51-val-sp');
    let inp2 = document.getElementById('a52-inp');
    let sp2 = document.getElementById('a52-val-sp');
    let inp3 = document.getElementById('a53-inp');
    let sp3 = document.getElementById('a53-val-sp');
    let inp4 = document.getElementById('a54-inp');
    let sp4 = document.getElementById('a54-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(4)), parseFloat(act2_y1l1.toFixed(4)))) {
        alert('Y1L1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(4)), parseFloat(act2_y2l2.toFixed(4)))) {
        alert('Y2L2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(4)), parseFloat(act2_y3l3.toFixed(4)))) {
        alert('Y3L3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(4)), parseFloat(act2_y4l4.toFixed(4)))) {
        alert('Y4L4 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${act2_y1l1.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${act2_y2l2.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${act2_y3l3.toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${act2_y4l4.toFixed(4)}`;
    let div = (document.getElementById('y-div-act2'));
    div.style.display = 'block';
}
function act2_calculate_ly() {
    for (let i = 0; i < 4; i++) {
        act2_y_lag[i] = y_val[i] * act2_lagrn[i];
    }
    console.log("act2_y_lag= ", act2_y_lag);
    [act2_y1l1, act2_y2l2, act2_y3l3, act2_y4l4] = act2_y_lag;
    console.log("ACT2 X1L1= ", act2_y1l1);
    console.log("ACT2 X2L2= ", act2_y2l2);
    console.log("ACT2 X3L3= ", act2_y3l3);
    console.log("ACT2 X4L4= ", act2_y4l4);
    act2_y = act2_y1l1 + act2_y2l2 + act2_y3l3 + act2_y4l4;
    console.log("act2_y ", act2_y);
}
function act2_verify_y_value() {
    let btn = document.getElementById('temp-btn-4');
    let y_inp = (document.getElementById('act2_y-inp'));
    if (!verify_values(parseFloat(parseFloat(y_inp.value).toFixed(4)), parseFloat(act2_y.toFixed(4)))) {
        y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y_inp.style.border = '1px solid #ced4da';
        y_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    let btn2 = (document.getElementById('act1-btn5'));
    btn2.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn5'));
    btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map