package com.example.numbertrick1to100;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl(Config.getStartUrl());
	}
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
	// Inflate the menu; this adds items to the action bar if it is present.
	getMenuInflater().inflate(R.menu.main, menu);
	return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
	switch (item.getItemId()) {
	case R.id.action_settings:
	    finish();
	}
	return true;
	/** true -> consumimos el item, no se propaga */
    }
}
