| Objects      | Properties    | Messages | Scenario       | Output     |
| :------      | :---------    | :------- |:---------------|:------------|
| Account      | balance       | deposit  | valid amount   | new balance |
|              | value (+ or -)|          | invalid amount | error       |
|              | transactions  | withdraw | valid amount   | new balance |
|              | value (+ or -)|          | invalid amount | error       |
| Statement    | header @Str   | print    |                | console msg |
|              | lines @Str    |          |                |             |
| Transaction  | ID  @Num      |          |                |             |         
|              | Date @Str     |          |                |             |
|              | value (+ or -)|          |                |             |