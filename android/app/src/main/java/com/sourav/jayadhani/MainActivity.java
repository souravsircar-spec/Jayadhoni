package com.sourav.jayadhani;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.splashscreen.SplashScreen;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static final int MIC_PERMISSION_CODE = 101;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.installSplashScreen(this);
        super.onCreate(savedInstanceState);
        checkAndRequestPermissions();
    }

    private void checkAndRequestPermissions() {
        String[] permissions = {
            Manifest.permission.RECORD_AUDIO,
            Manifest.permission.MODIFY_AUDIO_SETTINGS
        };
        
        boolean needsRequest = false;
        for (String p : permissions) {
            if (ContextCompat.checkSelfPermission(this, p) != PackageManager.PERMISSION_GRANTED) {
                needsRequest = true;
                break;
            }
        }

        if (needsRequest) {
            ActivityCompat.requestPermissions(this, permissions, MIC_PERMISSION_CODE);
        }
    }

    @Override
    public void onStart() {
        super.onStart();
        
        WebView webView = getBridge().getWebView();
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                for (String res : request.getResources()) {
                    if (res.equals(PermissionRequest.RESOURCE_AUDIO_CAPTURE)) {
                        request.grant(new String[]{PermissionRequest.RESOURCE_AUDIO_CAPTURE});
                        return;
                    }
                }
                request.grant(request.getResources());
            }
        });
    }
}
