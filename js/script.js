var input = document.querySelector("#input");
var result = document.querySelector("#result");
var inputType = document.querySelector("#inputType");
var resultType = document.querySelector("#resultType");
var from, to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
function from_to() {
  from = inputType.value;
  to = resultType.value;
}

from_to();

function myResult() {

  from_to();

//   Meter formula

    if (from === "meter" && to === "kilometer") {
    result.value = Number(input.value) * 0.001;
} 
    else if (from === "meter" && to === "decimeter") {
    result.value = Number(input.value) * 10;
} 
    else if (from === "meter" && to === "centimeter") {
    result.value = Number(input.value) * 100;
}
    else if (from === "meter" && to === "millimeter") {
    result.value = Number(input.value) * 1000;
}  
    else if (from === "meter" && to === "micron") {
    result.value = Number(input.value) * 1000000;
}  
    else if (from === "meter" && to === "nanometer") {
    result.value = Number(input.value) * 1000000000;
}  
    else if (from === "meter" && to === "picometer") {
    result.value = Number(input.value) * 1.0000E+12;
} 
    else if (from === "meter" && to === "meter") {
    result.value = input.value;
}
// kilometer formula

    if (from === "kilometer" && to === "meter") {
    result.value = Number(input.value) * 1000;
} 
    else if (from === "kilometer" && to === "decimeter") {
    result.value = Number(input.value) * 10000;
} 
    else if (from === "kilometer" && to === "centimeter") {
    result.value = Number(input.value) * 100000;
}
    else if (from === "kilometer" && to === "millimeter") {
    result.value = Number(input.value) * 1000000;
}  
    else if (from === "kilometer" && to === "micrometer") {
    result.value = Number(input.value) * 1000000;
}  
    else if (from === "kilometer" && to === "nanometer") {
    result.value = Number(input.value) * 1000000000;
}  
    else if (from === "kilometer" && to === "picometer") {
    result.value = Number(input.value) * 1.0000E+15;
 
} 
    else if (from === "kilometer" && to === "kilometer") {
    result.value = input.value;
}
// formula for centimeter

    if (from === "centimeter" && to === "meter") {
    result.value = Number(input.value) * 0.01;
} 
    else if (from === "centimeter" && to === "decimeter") {
    result.value = Number(input.value) * 0.1;
} 
    else if (from === "centimeter" && to === "kilometer") {
    result.value = Number(input.value) * 0.00001;
}
    else if (from === "centimeter" && to === "millimeter") {
    result.value = Number(input.value) * 10;
}  
    else if (from === "centimeter" && to === "micrometer") {
    result.value = Number(input.value) * 100000;
}  
    else if (from === "centimeter" && to === "nanometer") {
    result.value = Number(input.value) * 10000000;
} 
    else if (from === "centimeter" && to === "picometer") {
    result.value = Number(input.value) * 1.0000E+10;
} 
    else if (from === "centimeter" && to === "centimeter") {
    result.value = input.value;
} 
// formula fo decimeter

    if (from === "decimeter" && to === "meter") {
    result.value = Number(input.value) * 0.1;
} 
    else if (from === "decimeter" && to === "centimeter") {
    result.value = Number(input.value) * 10;
} 
    else if (from === "decimeter" && to === "kilometer") {
    result.value = Number(input.value) * 0.0001;
}
    else if (from === "decimeter" && to === "millimeter") {
    result.value = Number(input.value) * 100;
}  
    else if (from === "decimeter" && to === "micrometer") {
    result.value = Number(input.value) * 100000;
}  
    else if (from === "decimeter" && to === "nanometer") {
    result.value = Number(input.value) * 100000000;
} 
    else if (from === "decimeter" && to === "picometer") {
    result.value = Number(input.value) * 1.0000E+11;
} 
    else if (from === "decimeter" && to === "decimeter") {
    result.value = input.value;
} 

// formula fo millimeter

if (from === "millimeter" && to === "meter") {
    result.value = Number(input.value) * 0.001;
} 
    else if (from === "millimeter" && to === "centimeter") {
    result.value = Number(input.value) * 0.1;
} 
    else if (from === "millimeter" && to === "kilometer") {
    result.value = Number(input.value) * 0.000001;
}
    else if (from === "millimeter" && to === "decimeter") {
    result.value = Number(input.value) * 0.01;
}  
    else if (from === "millimeter" && to === "micrometer") {
    result.value = Number(input.value) * 1000;
}  
    else if (from === "millimeter" && to === "nanometer") {
    result.value = Number(input.value) * 10000000;
}  
    else if (from === "millimeter" && to === "picometer") {
    result.value = Number(input.value) * 1.0000E+9;
} 
    else if (from === "millimeter" && to === "millimeter") {
    result.value = input.value;
} 
// formula fo micrometer

if (from === "micrometer" && to === "meter") {
    result.value = Number(input.value) * 0.000001;
} 
    else if (from === "micrometer" && to === "centimeter") {
    result.value = Number(input.value) * 0.0001;
} 
    else if (from === "micrometer" && to === "kilometer") {
    result.value = Number(input.value) * 1.E-9;
}
    else if (from === "micrometer" && to === "decimeter") {
    result.value = Number(input.value) * 0.00001;
}  
    else if (from === "micrometer" && to === "millimeter") {
    result.value = Number(input.value) * 0.001;
}  
    else if (from === "micrometer" && to === "nanometer") {
    result.value = Number(input.value) * 1000;
}  
    else if (from === "micrometer" && to === "picometer") {
    result.value = Number(input.value) * 1000000;
} 
    else if (from === "micrometer" && to === "micrometer") {
    result.value = input.value;
} 
// formula fo nanometer

if (from === "nanometer" && to === "meter") {
    result.value = Number(input.value) / 1.0000E+9;
} 
    else if (from === "nanometer" && to === "centimeter") {
    result.value = Number(input.value) / 10000000;
} 
    else if (from === "nanometer" && to === "kilometer") {
    result.value = Number(input.value) / 1.0000E+12;
}
    else if (from === "nanometer" && to === "decimeter") {
    result.value = Number(input.value) / 100000000;
}  
    else if (from === "nanometer" && to === "millimeter") {
    result.value = Number(input.value) / 1000000;
}  
    else if (from === "nanometer" && to === "micrometer") {
    result.value = Number(input.value) / 1000;
}  
    else if (from === "nanometer" && to === "picometer") {
    result.value = Number(input.value) * 1000;
} 
    else if (from === "nanometer" && to === "nanometer") {
    result.value = input.value;
} 
// formula fo picometer

if (from === "picometer" && to === "meter") {
    result.value = Number(input.value) / 1.0000E+12;
} 
    else if (from === "picometer" && to === "centimeter") {
    result.value = Number(input.value) / 1.0000E+10;
} 
    else if (from === "picometer" && to === "kilometer") {
    result.value = Number(input.value) / 1.0000E+15;
}
    else if (from === "picometer" && to === "decimeter") {
    result.value = Number(input.value) / 1.0000E+11;
}  
    else if (from === "picometer" && to === "millimeter") {
    result.value = Number(input.value) / 1.0000E+9;
}  
    else if (from === "picometer" && to === "micrometer") {
    result.value = Number(input.value) / 1000000;
}  
    else if (from === "picometer" && to === "nanometer") {
    result.value = Number(input.value) * 1000;
} 
    else if (from === "picometer" && to === "picometer") {
    result.value = input.value;
} 
}
