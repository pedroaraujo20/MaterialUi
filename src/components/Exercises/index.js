import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

function Exercises({ 
    exercises, 
    category, 
    onSelect, 
    exercise: {
        id, 
        title = 'Welcome', 
        description = 'Please select an exercise from the list on the left.'} 
    }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) =>
                        !category || category === group
                            ? <Fragment key={group}>
                                    <Typography variant="h6" style={{textTransform: 'capitalize'}}>
                                        {group}
                                    </Typography>
                                    <List component="ul">
                                        {exercises.map(({id, title}) => 
                                        <ListItem 
                                            key={id}
                                            button
                                            onClick={() => onSelect(id)}
                                        >
                                        <ListItemText primary={title} />
                                        </ListItem>  
                                        )}
                                </List>
                            </Fragment>
                            : null                        
                    )}
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper style={styles.Paper}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" style={{marginTop: 20}}>
                        {description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Exercises;