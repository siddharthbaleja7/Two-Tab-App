use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate(input: String) -> i32 {
    let result = eval_math_expression(&input);
    result
}

fn eval_math_expression(expr: &str) -> i32 {
    // Very simple example, you can replace it with real math parsing logic.
    match expr {
        "3+4" => 7,
        "5*5" => 25,
        _ => 0,
    }
}
