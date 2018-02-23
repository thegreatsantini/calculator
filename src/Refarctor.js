/* we could actally have 'primary' as an argument for our create button function
that would eliminate the need for the second function
as everything is litreally the same except for primary and secondary */


render() {
 
        const generatePrimary = (label, onClick) => {
            return (
                <FloatingActionButton
                    style={style}
                    primary={true}
                    label={label}
                    onClick={onClick}
                >{label}</FloatingActionButton>
            );
        };
 
        const generateSecondary = (label, onClick) => {
            return (
                <FloatingActionButton
                    style={style}
                    secondary={true}
                    label={label}
                    onClick={onClick}
                >{label}</FloatingActionButton>
            );
        };
 
        const buildNumberButtons = (start, end) => {
            if (end) {
                let row = [];
                for (let i = start; i <= end; i++) {
                    row.push(generateSecondary(i, () => this.handleNumber(i)));
                }
                return row;
            }
        };
 
        return (
            <div className="App">
                <TextField hintText="Do Maths Here" value={this.state.number}/>
                <div>
                    {generatePrimary('C', () => this.handleClear())}
                    {generatePrimary('=', () => this.handleResult())}
                    {generatePrimary('+', () => this.handleOperator('addition'))}
                    {generatePrimary('-', () => this.handleOperator('subtraction'))}
                </div>
                <div>
                    {buildNumberButtons(1, 3)}
                    {generatePrimary('x', () => this.handleOperator('multiplication'))}
                </div>
                <div>
                    {buildNumberButtons(4, 6)}
                    {generatePrimary('/', () => this.handleOperator('divide'))}
                </div>
                <div>
                    {buildNumberButtons(7, 9)}
                    {generatePrimary('%', () => this.handleOperator('modulus'))}
                </div>
                <div>
                    {generateSecondary('0', () => this.handleNumber(0))}
                </div>
                <div style={{height: "1em", borderStyle: "solid"}}>
                    {this.renderEquation()}
                </div>
            </div>
        );
    }