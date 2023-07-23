# Check if imwheel exists, create if it doesn't
# ".*" will affect all applications. Check description if you want per on a per-app basis

if [ ! -f ~/.imwheelrc ]; then
  cat >~/.imwheelrc<<EOF
".*"
None,      Up,   Button4, 1
None,      Down, Button5, 1
Control_L, Up,   Control_L|Button4
Control_L, Down, Control_L|Button5
Shift_L,   Up,   Shift_L|Button4
Shift_L,   Down, Shift_L|Button5
EOF
fi

CURRENT_VALUE=$(awk -F 'Button4,' '{print $2}' ~/.imwheelrc)

NEW_VALUE=$(zenity --scale \
  --window-icon=info \
  --ok-label=Apply \
  --title="imwheel" \
  --text "Choose mouse wheel speed:" \
  --min-value=1 \
  --max-value=100 \
  --value="$CURRENT_VALUE" \
  --step 1)

if [ -z "$NEW_VALUE" ]; then
  exit 0
fi

sed -i "s/\($TARGET_KEY *Button[45], *\).*/\1$NEW_VALUE/" ~/.imwheelrc

cat ~/.imwheelrc

# Make it so imwheel won't interfere with forward and backward buttons
imwheel -kill -b "4 5"