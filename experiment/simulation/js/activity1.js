let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Interpolation: Inverse Interpolation</h4>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='calculate_xy();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function calculate_xy() {
    x1 = Math.floor(Math.random() * 4) + 1;
    console.log('Random number x1 = ', x1);
    //xi = x1+0.5;
    x_val[0] = x1;
    for (let i = 1; i < 4; i++) {
        x_val[i] = parseInt((x_val[i - 1] + 1).toFixed(2));
    }
    console.log('x_val= ', x_val);
    let min = 2;
    let max = 5;
    yr = Math.floor(Math.random() * (max - min)) + min;
    console.log('Random number yr = ', yr);
    y_val = gety(x_val, yr);
    console.log('x_val= ', y_val);
    console.log('y_val0= ', y_val[0]);
    console.log('y_val1= ', y_val[1]);
    let min1 = y_val[0];
    let max1 = y_val[1];
    yi = Math.floor(Math.random() * (max1 - min1));
    console.log('Random number yi = ', yi);
    start_act1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <div id="table-div"></div>
        Find x at y = ${yi}
        $$ L_1 = \\frac{(y-y_2)(y-y_3)(y-y_4)}{(y_1-y_2)(y_1-y_3)(y_1-y_4)}  $$
        $$ L_2 = \\frac{(y-y_1)(y-y_3)(y-y_4)}{(y_2-y_1)(y_2-y_3)(y_2-y_4)}  $$
        $$ L_3 = \\frac{(y-y_1)(y-y_2)(y-y_4)}{(y_3-y_1)(y_3-y_2)(y_3-y_4)}  $$
        $$ L_4 = \\frac{(y-y_1)(y-y_2)(y-y_3)}{(y_4-y_1)(y_4-y_2)(y_4-y_3)}  $$

        <div id="l-ind-div-act1" style="display:block; margin-top: 2%">
            <div class='col-12'>
                <div id='bs-inp-div' style='text-align: center; font-size: 16px;'>
                    <p style="text-align: left">Find the value of L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub>, L<sub>4</sub></p>
                    <span style='font-size: 18px;'>L<sub>1</sub></span> = 
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a21-inp' > <span id='a21-val-sp'></span><br> L<sub>2</sub> = 
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a22-inp' > <span id='a22-val-sp'></span><br> L<sub>3</sub> =
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a23-inp' > <span id='a23-val-sp'></span><br> L<sub>4</sub> =  
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a24-inp' > <span id='a24-val-sp'>
                    </span>
                </div>
                <br>
                <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation2' onclick='verify_l_vals();' >Verify</button></div>
            </div>
        </div>
        <div id="yl-div-act1" style="display:none; margin-top: 2%">
            <p style="text-align: left">Find the values of X<sub>1</sub>L<sub>1</sub>, X<sub>2</sub>L<sub>2</sub>, X<sub>3</sub>L<sub>3</sub>, X<sub>4</sub>L<sub>4</sub></p>
            <span style='font-size: 18px;'>X<sub>1</sub>L<sub>1</sub></span> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a31-inp' > <span id='a31-val-sp'></span><br> X<sub>2</sub>L<sub>2</sub> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a32-inp' > <span id='a32-val-sp'></span><br> X<sub>3</sub>L<sub>3</sub> =
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a33-inp' > <span id='a33-val-sp'></span><br> X<sub>4</sub>L<sub>4</sub> =  
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a34-inp' > <span id='a34-val-sp'>
            </span>
            <br><br>
            <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation3' onclick='verify_yl_vals();' >Verify</button></div>
        </div>

        <div id="y-div-act1" style="display:none;">
            <p>X = X<sub>1</sub>L<sub>1</sub> + X<sub>2</sub>L<sub>2</sub> + X<sub>3</sub>L<sub>3</sub> + X<sub>4</sub>L<sub>4</sub></p>
            <p>
                Calculate x(${yi}) = <span style='display: inline-block'>
                    <input type='number' id='y-inp' class='form-control fs-16px' />
                    <span id='y-val-sp'>
                </span>
            </p>
            <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_y_value();' id='temp-btn-3' >Verify</button>   
        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    fill_table();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function fill_table() {
    let div = (document.getElementById('table-div'));
    let header = ['x'];
    tb_data = [['y']];
    let n_inputs = [];
    let i = 0;
    for (i = 0; i < x_val.length; i++) {
        header.push(`${x_val[i]}`);
        tb_data[0].push(y_val[i]);
        n_inputs.push(i + 1);
    }
    let tb = new Display_Table(header, tb_data, div);
    tb.load_table();
    lang();
}
function lang() {
    let x_val_temp = y_val;
    y_val = x_val;
    x_val = x_val_temp;
    console.log('inverted x_val= ', x_val);
    console.log('inverted y_val= ', y_val);
    for (let i = 0; i < 4; i++) {
        lagrn[i] = lagrange(yi, i, x_val);
    }
    console.log('lagrn= ', lagrn);
    [l1, l2, l3, l4] = lagrn;
    console.log('L1= ', l1);
    console.log('L2= ', l2);
    console.log('L3= ', l3);
    console.log('L4= ', l4);
    calculate_ly();
}
function verify_l_vals() {
    let btn = (document.getElementById('temp-btn-equation2'));
    let inp1 = (document.getElementById('a21-inp'));
    let sp1 = (document.getElementById('a21-val-sp'));
    let inp2 = (document.getElementById('a22-inp'));
    let sp2 = (document.getElementById('a22-val-sp'));
    let inp3 = (document.getElementById('a23-inp'));
    let sp3 = (document.getElementById('a23-val-sp'));
    let inp4 = (document.getElementById('a24-inp'));
    let sp4 = (document.getElementById('a24-val-sp'));
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(4)), parseFloat(l1.toFixed(4)))) {
        alert('L1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(4)), parseFloat(l2.toFixed(4)))) {
        alert('L2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(4)), parseFloat(l3.toFixed(4)))) {
        alert('L3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(4)), parseFloat(l4.toFixed(4)))) {
        alert('L4 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${l1.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${l2.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${l3.toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${l4.toFixed(4)}`;
    let div = (document.getElementById('yl-div-act1'));
    div.style.display = 'block';
}
function verify_yl_vals() {
    let btn = (document.getElementById('temp-btn-equation3'));
    let inp1 = (document.getElementById('a31-inp'));
    let sp1 = (document.getElementById('a31-val-sp'));
    let inp2 = (document.getElementById('a32-inp'));
    let sp2 = (document.getElementById('a32-val-sp'));
    let inp3 = (document.getElementById('a33-inp'));
    let sp3 = (document.getElementById('a33-val-sp'));
    let inp4 = (document.getElementById('a34-inp'));
    let sp4 = (document.getElementById('a34-val-sp'));
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(4)), parseFloat(y1l1.toFixed(4)))) {
        alert('Y1L1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(4)), parseFloat(y2l2.toFixed(4)))) {
        alert('Y2L2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(4)), parseFloat(y3l3.toFixed(4)))) {
        alert('Y3L3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(4)), parseFloat(y4l4.toFixed(4)))) {
        alert('Y4L4 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${y1l1.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${y2l2.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${y3l3.toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${y4l4.toFixed(4)}`;
    let div = (document.getElementById('y-div-act1'));
    div.style.display = 'block';
}
function calculate_ly() {
    for (let i = 0; i < 4; i++) {
        y_lag[i] = y_val[i] * lagrn[i];
    }
    console.log('x_lag= ', y_lag);
    [y1l1, y2l2, y3l3, y4l4] = y_lag;
    console.log('X1L1= ', y1l1);
    console.log('X2L2= ', y2l2);
    console.log('X3L3= ', y3l3);
    console.log('X4L4= ', y4l4);
    y = y1l1 + y2l2 + y3l3 + y4l4;
    console.log('X value= ', y);
}
function verify_y_value() {
    let btn = (document.getElementById('temp-btn-3'));
    let y_inp = (document.getElementById('y-inp'));
    let ysp = (document.getElementById('y-val-sp'));
    if (!verify_values(parseFloat(parseFloat(y_inp.value).toFixed(4)), parseFloat(y.toFixed(4)))) {
        y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y_inp.style.border = '1px solid #ced4da';
        y_inp.disabled = true;
        y_inp.remove();
        ysp.innerText = `${y}`;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map